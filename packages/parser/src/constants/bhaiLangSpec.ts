export const TokenTypes = {
  NULL_TYPE: null,

  HI_BHAI_TYPE: "main",

  BYE_BHAI_TYPE: "end",

  BOL_BHAI_TYPE: "print",

  BHAI_YE_HAI_TYPE: "manau",

  AGAR_BHAI: "yadi",

  WARNA_BHAI: "anyatha",

  NAHI_TO_BHAI: "anyatha yadi",

  JAB_TAK_BHAI: "jaba samma",

  BAS_KAR_BHAI: "antya gara",

  AGLA_DEKH_BHAI: "jari rakha",

  NALLA_TYPE: "khali",

  SEMI_COLON_TYPE: ";",

  OPEN_CURLY_BRACE_TYPE: "{",

  CLOSED_CURLY_BRACE_TYPE: "}",

  OPEN_PARENTHESIS_TYPE: "(",

  CLOSED_PARENTHESIS_TYPE: ")",

  COMMA_TYPE: ",",

  NUMBER_TYPE: "NUMBER",

  IDENTIFIER_TYPE: "IDENTIFIER",

  SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

  COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

  ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

  MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

  RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND: "LOGICAL_AND",

  LOGICAL_OR: "LOGICAL_OR"
};

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  //Keywords
  { regex: /^\bhi bhai\b/, tokenType: TokenTypes.HI_BHAI_TYPE },
  { regex: /^\bbye bhai\b/, tokenType: TokenTypes.BYE_BHAI_TYPE },
  { regex: /^\bbol bhai\b/, tokenType: TokenTypes.BOL_BHAI_TYPE },
  { regex: /^\bbhai ye hai\b/, tokenType: TokenTypes.BHAI_YE_HAI_TYPE },
  { regex: /^\bagar bhai\b/, tokenType: TokenTypes.AGAR_BHAI },
  { regex: /^\bnahi to bhai\b/, tokenType: TokenTypes.NAHI_TO_BHAI },
  { regex: /^\bwarna bhai\b/, tokenType: TokenTypes.WARNA_BHAI },
  { regex: /^\bnalla\b/, tokenType: TokenTypes.NALLA_TYPE },
  { regex: /^\bjab tak bhai\b/, tokenType: TokenTypes.JAB_TAK_BHAI },
  { regex: /^\bbas kar bhai\b/, tokenType: TokenTypes.BAS_KAR_BHAI },
  { regex: /^\bagla dekh bhai\b/, tokenType: TokenTypes.AGLA_DEKH_BHAI },

  // Number
  { regex: /^[+-]?([\d]*[.])?[\d]+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\bsahi\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bgalat\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  {regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR},

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  {regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR},

  // logical operators: &&, ||
  {regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND},
  {regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR},

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;
