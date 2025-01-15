const authService = require('../services/authService');

exports.signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;

  
    const existingUser = await authService.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    
    const hashedPassword = await authService.hashPassword(password);
    console.log('Hashed password:', hashedPassword);

    
    const newUser = await authService.createUser({ email, password: hashedPassword, name });

    res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
  } catch (error) {
    if (error.name === 'ValidationError') {
      
      console.error('Validation error:', error.message);
      return res.status(400).json({ message: error.message });
    }
    console.error('Error in signup:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    
    const user = await authService.findUserByEmail(email);
    if (!user) {
      console.log('User not found:', email); 
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log('Stored password (hashed):', user.password); 
    console.log('Entered password:', password); 

   
    const isMatch = await authService.verifyPassword(password.trim(), user.password);
    if (!isMatch) {
      console.log('Password mismatch for user:', email); 
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    
    const token = authService.generateToken(user._id);
    console.log('Token generated for user:', user.email); 
    res.json({ token });
  } catch (error) {
    console.error('Error in login:', error); 
    res.status(500).json({ message: 'Server error' });
  }
};
