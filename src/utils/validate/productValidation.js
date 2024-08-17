// src/utils/validate/productValidation.js
const { body } = require('express-validator');

exports.createProductValidation = [
  body('name').isString().isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
  body('color').isString().notEmpty().withMessage('Color is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
];

exports.updateProductValidation = [
  body('name').optional().isString().isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
  body('color').optional().isString().notEmpty().withMessage('Color is required'),
  body('price').optional().isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
  body("id").notEmpty().withMessage("id is required")
];

exports.createMultiProductValidation = [
  body('*.name').isString().isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
  body('*.color').isString().notEmpty().withMessage('Color is required'),
  body('*.price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
];