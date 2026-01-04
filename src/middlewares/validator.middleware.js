export const validateSchema = (schema) => {
  return (req, res, next) => {
    try {
      const data = req.body || {};
      schema.parse(data);
      next();
    } catch (error) {
      if (error.issues) {
        // Agrupa errores por campo y toma solo el primero de cada uno
        const errorsByField = {};
        
        error.issues.forEach(issue => {
          const field = issue.path[0] || 'unknown';
          if (!errorsByField[field]) {
            errorsByField[field] = {
              field: field,
              message: issue.message
            };
          }
        });
        
        const errors = Object.values(errorsByField);
        
        return res.status(400).json({ errors });
      }
      
      return res.status(400).json({ 
        message: error.message || 'Error de validación'
      });
    }
  };
};