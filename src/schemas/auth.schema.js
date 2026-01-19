import { z } from 'zod';

export const registerSchema = z.object({
    username: z.preprocess(
        (val) => val === undefined ? '' : val,
        z.string().min(1, { message: 'Username is required' })
            .min(3, { message: 'Username must be at least 3 characters long' })
    ),
    
    email: z.preprocess(
        (val) => val === undefined ? '' : val,
        z.string().min(1, { message: 'Email is required' })
            .email({ message: 'Invalid email address' })
    ),
    
    password: z.preprocess(
        (val) => val === undefined ? '' : val,
        z.string().min(1, { message: 'Password is required' })
            .min(6, { message: 'Password must be at least 6 characters long' })
    ),
});

export const loginSchema = z.object({
    email: z.preprocess(
        (val) => val === undefined ? '' : val,
        z.string().min(1, { message: 'Email is required' })
            .email({ message: 'Invalid email address' })
    ),
    
    password: z.preprocess(
        (val) => val === undefined ? '' : val,
        z.string().min(1, { message: 'Password is required' })
            .min(6, { message: 'Password must be at least 6 characters long' })
    ),
});