let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// Match (http)
// Match Zero or one (s)
// Match (://), (\) are escape squences
// Non Matching Group (?:)
// Match Any hyphen or charactar, One or more time [-\w]+
// Match (.)
// Match Zero or one (?:[-\w]+\.)?
// Match Any hyphen or charactar followed by dot, One or more time ([-\w]+\.)
// Match any charactar one or more times 
// Non Matching Group (?:)
// Match dot followed by any charactar one or more times
// Match Zero or one (?:\.\w+)?
// Match a slash zero or more time (\/?)
// Wild Match zero or more times (.*)
// i flash => which indecate case insensetive matching
