
// const jwt = require('jsonwebtoken');
// const User = require('../model/user.model'); // Ajusta la ruta según tu estructura de proyecto

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: 'Usuario no encontrado' });
//     }

//     // Aquí deberías tener lógica para verificar la contraseña del usuario

//     const token = jwt.sign({ userId: user._id }, 'tu_secreto', { expiresIn: '1h' });

//     res.json({ token, userId: user._id }); // Devuelve el token y el userId
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { login };
