import mysql from 'mysql2/promise';

// Configuración de la conexión a la base de datos
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'ecommerce_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Creamos un pool de conexiones para mejor rendimiento
const pool = mysql.createPool(dbConfig);

/**
 * Ejecuta una consulta SQL
 * @param {string} sql - La consulta SQL a ejecutar
 * @param {any[]} params - Los parámetros para la consulta preparada
 * @returns {Promise<any>} - Resultado de la consulta
 */
export async function query(sql: string, params: any[] = []): Promise<any> {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}

/**
 * Obtiene un usuario por su email
 * @param {string} email - El email del usuario
 * @returns {Promise<any>} - Datos del usuario o null
 */
export async function getUserByEmail(email: string): Promise<any> {
  const users = await query(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  
  return users.length ? users[0] : null;
}

/**
 * Crea un nuevo usuario
 * @param {string} name - Nombre del usuario
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña hasheada
 * @returns {Promise<number>} - ID del usuario creado
 */
export async function createUser(name: string, email: string, password: string): Promise<number> {
  const result = await query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  );
  
  return result.insertId;
}

/**
 * Actualiza la última vez que un usuario inició sesión
 * @param {number} userId - ID del usuario
 * @returns {Promise<void>}
 */
export async function updateLastLogin(userId: number): Promise<void> {
  await query(
    'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?',
    [userId]
  );
}

/**
 * Crea un token de restablecimiento de contraseña
 * @param {number} userId - ID del usuario
 * @param {string} token - Token generado
 * @param {Date} expiresAt - Fecha de expiración
 * @returns {Promise<void>}
 */
export async function createPasswordResetToken(userId: number, token: string, expiresAt: Date): Promise<void> {
  await query(
    'INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES (?, ?, ?)',
    [userId, token, expiresAt]
  );
}

/**
 * Obtiene un token de restablecimiento de contraseña
 * @param {string} token - Token a buscar
 * @returns {Promise<any>} - Datos del token o null
 */
export async function getPasswordResetToken(token: string): Promise<any> {
  const tokens = await query(
    'SELECT * FROM password_reset_tokens WHERE token = ? AND expires_at > CURRENT_TIMESTAMP',
    [token]
  );
  
  return tokens.length ? tokens[0] : null;
}

/**
 * Registra un intento de inicio de sesión
 * @param {string} email - Email usado
 * @param {string} ipAddress - Dirección IP
 * @param {boolean} success - Si el intento fue exitoso
 * @returns {Promise<void>}
 */
export async function logLoginAttempt(email: string, ipAddress: string, success: boolean): Promise<void> {
  await query(
    'INSERT INTO login_attempts (email, ip_address, success) VALUES (?, ?, ?)',
    [email, ipAddress, success]
  );
}

export default {
  query,
  getUserByEmail,
  createUser,
  updateLastLogin,
  createPasswordResetToken,
  getPasswordResetToken,
  logLoginAttempt
}; 