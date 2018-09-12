var searchIndex = {};
searchIndex["ascii"] = {"doc":"A library that provides ASCII-only string and character types, equivalent to the `char`, `str` and `String` types in the standard library.","items":[[3,"ToAsciiCharError","ascii","Error returned by `ToAsciiChar`.",null,null],[3,"AsciiStr","","AsciiStr represents a byte or string slice that only contains ASCII characters.",null,null],[3,"AsAsciiStrError","","Error that is returned when a sequence of `u8` are not all ASCII.",null,null],[3,"Lines","","An iterator over the lines of the internal character array.",null,null],[4,"AsciiChar","","An ASCII character. It wraps a `u8`, with the highest bit always zero.",null,null],[13,"Null","","`'\\0'`",0,null],[13,"SOH","","Start Of Heading",0,null],[13,"SOX","","Start Of teXt",0,null],[13,"ETX","","End of TeXt",0,null],[13,"EOT","","End Of Transmission",0,null],[13,"ENQ","","Enquiry",0,null],[13,"ACK","","Acknowledgement",0,null],[13,"Bell","","bell / alarm / audible",0,null],[13,"BackSpace","","Backspace",0,null],[13,"Tab","","`'\\t'`",0,null],[13,"LineFeed","","`'\\n'`",0,null],[13,"VT","","Vertical tab",0,null],[13,"FF","","Form Feed",0,null],[13,"CarriageReturn","","`'\\r'`",0,null],[13,"SI","","Shift In",0,null],[13,"SO","","Shift Out",0,null],[13,"DLE","","Data Link Escape",0,null],[13,"DC1","","Device control 1, often XON",0,null],[13,"DC2","","Device control 2",0,null],[13,"DC3","","Device control 3, Often XOFF",0,null],[13,"DC4","","Device control 4",0,null],[13,"NAK","","Negative AcKnowledgement",0,null],[13,"SYN","","Synchronous idle",0,null],[13,"ETB","","End of Transmission Block",0,null],[13,"CAN","","Cancel",0,null],[13,"EM","","End of Medium",0,null],[13,"SUB","","Substitute",0,null],[13,"ESC","","Escape",0,null],[13,"FS","","File Separator",0,null],[13,"GS","","Group Separator",0,null],[13,"RS","","Record Separator",0,null],[13,"US","","Unit Separator",0,null],[13,"Space","","`' '`",0,null],[13,"Exclamation","","`'!'`",0,null],[13,"Quotation","","`'\"'`",0,null],[13,"Hash","","`'#'`",0,null],[13,"Dollar","","`'$'`",0,null],[13,"Percent","","`'%'`",0,null],[13,"Ampersand","","`'&'`",0,null],[13,"Apostrophe","","`'\\''`",0,null],[13,"ParenOpen","","`'('`",0,null],[13,"ParenClose","","`')'`",0,null],[13,"Asterisk","","`'*'`",0,null],[13,"Plus","","`'+'`",0,null],[13,"Comma","","`','`",0,null],[13,"Minus","","`'-'`",0,null],[13,"Dot","","`'.'`",0,null],[13,"Slash","","`'/'`",0,null],[13,"_0","","`'0'`",0,null],[13,"_1","","`'1'`",0,null],[13,"_2","","`'2'`",0,null],[13,"_3","","`'3'`",0,null],[13,"_4","","`'4'`",0,null],[13,"_5","","`'5'`",0,null],[13,"_6","","`'6'`",0,null],[13,"_7","","`'7'`",0,null],[13,"_8","","`'8'`",0,null],[13,"_9","","`'9'`",0,null],[13,"Colon","","`':'`",0,null],[13,"Semicolon","","`';'`",0,null],[13,"LessThan","","`'<'`",0,null],[13,"Equal","","`'='`",0,null],[13,"GreaterThan","","`'>'`",0,null],[13,"Question","","`'?'`",0,null],[13,"At","","`'@'`",0,null],[13,"A","","`'A'`",0,null],[13,"B","","`'B'`",0,null],[13,"C","","`'C'`",0,null],[13,"D","","`'D'`",0,null],[13,"E","","`'E'`",0,null],[13,"F","","`'F'`",0,null],[13,"G","","`'G'`",0,null],[13,"H","","`'H'`",0,null],[13,"I","","`'I'`",0,null],[13,"J","","`'J'`",0,null],[13,"K","","`'K'`",0,null],[13,"L","","`'L'`",0,null],[13,"M","","`'M'`",0,null],[13,"N","","`'N'`",0,null],[13,"O","","`'O'`",0,null],[13,"P","","`'P'`",0,null],[13,"Q","","`'Q'`",0,null],[13,"R","","`'R'`",0,null],[13,"S","","`'S'`",0,null],[13,"T","","`'T'`",0,null],[13,"U","","`'U'`",0,null],[13,"V","","`'V'`",0,null],[13,"W","","`'W'`",0,null],[13,"X","","`'X'`",0,null],[13,"Y","","`'Y'`",0,null],[13,"Z","","`'Z'`",0,null],[13,"BracketOpen","","`'['`",0,null],[13,"BackSlash","","`'\\'`",0,null],[13,"BracketClose","","`']'`",0,null],[13,"Caret","","`'_'`",0,null],[13,"UnderScore","","`'_'`",0,null],[13,"Grave","","`'`'`",0,null],[13,"a","","`'a'`",0,null],[13,"b","","`'b'`",0,null],[13,"c","","`'c'`",0,null],[13,"d","","`'d'`",0,null],[13,"e","","`'e'`",0,null],[13,"f","","`'f'`",0,null],[13,"g","","`'g'`",0,null],[13,"h","","`'h'`",0,null],[13,"i","","`'i'`",0,null],[13,"j","","`'j'`",0,null],[13,"k","","`'k'`",0,null],[13,"l","","`'l'`",0,null],[13,"m","","`'m'`",0,null],[13,"n","","`'n'`",0,null],[13,"o","","`'o'`",0,null],[13,"p","","`'p'`",0,null],[13,"q","","`'q'`",0,null],[13,"r","","`'r'`",0,null],[13,"s","","`'s'`",0,null],[13,"t","","`'t'`",0,null],[13,"u","","`'u'`",0,null],[13,"v","","`'v'`",0,null],[13,"w","","`'w'`",0,null],[13,"x","","`'x'`",0,null],[13,"y","","`'y'`",0,null],[13,"z","","`'z'`",0,null],[13,"CurlyBraceOpen","","`'{'`",0,null],[13,"VerticalBar","","`'|'`",0,null],[13,"CurlyBraceClose","","`'}'`",0,null],[13,"Tilde","","`'~'`",0,null],[13,"DEL","","Delete",0,null],[5,"caret_encode","","Terminals use caret notation to display some typed control codes, such as ^D for EOT and ^Z for SUB.",null,{"i":[{"n":"c"}],"o":{"g":["asciichar"],"n":"option"}}],[5,"caret_decode","","Returns the control code represented by a caret notation letter, or `None` if the letter is not used in caret notation.",null,{"i":[{"n":"c"}],"o":{"g":["asciichar"],"n":"option"}}],[11,"clone","","",0,{"i":[{"n":"self"}],"o":{"n":"asciichar"}}],[11,"eq","","",0,{"i":[{"n":"self"},{"n":"asciichar"}],"o":{"n":"bool"}}],[11,"partial_cmp","","",0,{"i":[{"n":"self"},{"n":"asciichar"}],"o":{"g":["ordering"],"n":"option"}}],[11,"cmp","","",0,{"i":[{"n":"self"},{"n":"asciichar"}],"o":{"n":"ordering"}}],[11,"hash","","",0,null],[11,"from","","Constructs an ASCII character from a `u8`, `char` or other character type.",0,{"i":[{"n":"c"}],"o":{"g":["toasciicharerror"],"n":"result"}}],[11,"from_unchecked","","Constructs an ASCII character from a `char` or `u8` without any checks.",0,{"i":[{"n":"c"}],"o":{"n":"self"}}],[11,"as_byte","","Converts an ASCII character into a `u8`.",0,{"i":[{"n":"self"}],"o":{"n":"u8"}}],[11,"as_char","","Converts an ASCII character into a `char`.",0,{"i":[{"n":"self"}],"o":{"n":"char"}}],[11,"is_alphabetic","","Check if the character is a letter (a-z, A-Z)",0,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_digit","","Check if the character is a number (0-9)",0,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_alphanumeric","","Check if the character is a letter or number",0,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_blank","","Check if the character is a space or horizontal tab",0,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_whitespace","","Check if the character is a ' ', '\\t', '\\n' or '\\r'",0,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_control","","Check if the character is a control character",0,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_graph","","Checks if the character is printable (except space)",0,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_print","","Checks if the character is printable (including space)",0,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_lowercase","","Checks if the character is alphabetic and lowercase",0,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_uppercase","","Checks if the character is alphabetic and uppercase",0,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_punctuation","","Checks if the character is punctuation",0,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_hex","","Checks if the character is a valid hex digit",0,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"as_printable_char","","Unicode has printable versions of the ASCII control codes, like '␛'.",0,{"i":[{"n":"self"}],"o":{"n":"char"}}],[11,"make_ascii_uppercase","","Replaces letters `a` to `z` with `A` to `Z`",0,{"i":[{"n":"self"}]}],[11,"make_ascii_lowercase","","Replaces letters `A` to `Z` with `a` to `z`",0,{"i":[{"n":"self"}]}],[11,"to_ascii_uppercase","","Maps letters `a`...`z` to `A`...`Z` and returns everything else unchanged.",0,{"i":[{"n":"self"}],"o":{"n":"self"}}],[11,"to_ascii_lowercase","","Maps letters `A`...`Z` to `a`...`z` and returns everything else unchanged.",0,{"i":[{"n":"self"}],"o":{"n":"self"}}],[11,"eq_ignore_ascii_case","","Compares two characters case-insensitively.",0,{"i":[{"n":"self"},{"n":"self"}],"o":{"n":"bool"}}],[11,"fmt","","",0,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"fmt","","",0,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"eq","","",0,{"i":[{"n":"self"},{"n":"u8"}],"o":{"n":"bool"}}],[11,"partial_cmp","","",0,{"i":[{"n":"self"},{"n":"u8"}],"o":{"g":["ordering"],"n":"option"}}],[11,"eq","","",0,{"i":[{"n":"self"},{"n":"char"}],"o":{"n":"bool"}}],[11,"partial_cmp","","",0,{"i":[{"n":"self"},{"n":"char"}],"o":{"g":["ordering"],"n":"option"}}],[11,"eq","","",1,{"i":[{"n":"self"},{"n":"toasciicharerror"}],"o":{"n":"bool"}}],[11,"ne","","",1,{"i":[{"n":"self"},{"n":"toasciicharerror"}],"o":{"n":"bool"}}],[11,"description","","Returns a description for this error, like `std::error::Error::description`.",1,{"i":[{"n":"self"}],"o":{"n":"str"}}],[11,"fmt","","",1,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"fmt","","",1,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"to_ascii_char","","",0,{"i":[{"n":"self"}],"o":{"g":["asciichar","toasciicharerror"],"n":"result"}}],[11,"to_ascii_char_unchecked","","",0,{"i":[{"n":"self"}],"o":{"n":"asciichar"}}],[11,"eq","","",2,{"i":[{"n":"self"},{"n":"asciistr"}],"o":{"n":"bool"}}],[11,"ne","","",2,{"i":[{"n":"self"},{"n":"asciistr"}],"o":{"n":"bool"}}],[11,"partial_cmp","","",2,{"i":[{"n":"self"},{"n":"asciistr"}],"o":{"g":["ordering"],"n":"option"}}],[11,"lt","","",2,{"i":[{"n":"self"},{"n":"asciistr"}],"o":{"n":"bool"}}],[11,"le","","",2,{"i":[{"n":"self"},{"n":"asciistr"}],"o":{"n":"bool"}}],[11,"gt","","",2,{"i":[{"n":"self"},{"n":"asciistr"}],"o":{"n":"bool"}}],[11,"ge","","",2,{"i":[{"n":"self"},{"n":"asciistr"}],"o":{"n":"bool"}}],[11,"cmp","","",2,{"i":[{"n":"self"},{"n":"asciistr"}],"o":{"n":"ordering"}}],[11,"hash","","",2,null],[11,"new","","Coerces into an `AsciiStr` slice.",2,{"i":[{"n":"s"}],"o":{"n":"asciistr"}}],[11,"as_str","","Converts `&self` to a `&str` slice.",2,{"i":[{"n":"self"}],"o":{"n":"str"}}],[11,"as_bytes","","Converts `&self` into a byte slice.",2,null],[11,"as_slice","","Returns the entire string as slice of `AsciiChar`s.",2,null],[11,"as_mut_slice","","Returns the entire string as mutable slice of `AsciiChar`s.",2,null],[11,"as_ptr","","Returns a raw pointer to the `AsciiStr`'s buffer.",2,null],[11,"as_mut_ptr","","Returns an unsafe mutable pointer to the `AsciiStr`'s buffer.",2,null],[11,"from_ascii","","Converts anything that can represent a byte slice into an `AsciiStr`.",2,{"i":[{"n":"b"}],"o":{"g":["asciistr","asasciistrerror"],"n":"result"}}],[11,"from_ascii_unchecked","","Converts anything that can be represented as a byte slice to an `AsciiStr` without checking for non-ASCII characters..",2,{"i":[{"n":"b"}],"o":{"n":"asciistr"}}],[11,"len","","Returns the number of characters / bytes in this ASCII sequence.",2,{"i":[{"n":"self"}],"o":{"n":"usize"}}],[11,"is_empty","","Returns true if the ASCII slice contains zero bytes.",2,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"chars","","Returns an iterator over the characters of the `AsciiStr`.",2,{"i":[{"n":"self"}],"o":{"n":"chars"}}],[11,"chars_mut","","Returns an iterator over the characters of the `AsciiStr` which allows you to modify the value of each `AsciiChar`.",2,{"i":[{"n":"self"}],"o":{"n":"charsmut"}}],[11,"lines","","Returns an iterator over the lines of the `AsciiStr`, which are themselves `AsciiStr`s.",2,{"i":[{"n":"self"}],"o":{"n":"lines"}}],[11,"trim","","Returns an ASCII string slice with leading and trailing whitespace removed.",2,{"i":[{"n":"self"}],"o":{"n":"self"}}],[11,"trim_left","","Returns an ASCII string slice with leading whitespace removed.",2,{"i":[{"n":"self"}],"o":{"n":"self"}}],[11,"trim_right","","Returns an ASCII string slice with trailing whitespace removed.",2,{"i":[{"n":"self"}],"o":{"n":"self"}}],[11,"eq_ignore_ascii_case","","Compares two strings case-insensitively.",2,{"i":[{"n":"self"},{"n":"self"}],"o":{"n":"bool"}}],[11,"make_ascii_uppercase","","Replaces lowercase letters with their uppercase equivalent.",2,{"i":[{"n":"self"}]}],[11,"make_ascii_lowercase","","Replaces uppercase letters with their lowercase equivalent.",2,{"i":[{"n":"self"}]}],[11,"eq","","",2,{"i":[{"n":"self"},{"n":"str"}],"o":{"n":"bool"}}],[11,"as_ref","","",2,null],[11,"as_ref","","",2,{"i":[{"n":"self"}],"o":{"n":"str"}}],[11,"as_ref","","",2,null],[11,"as_mut","","",2,null],[11,"fmt","","",2,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"fmt","","",2,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"index","","",2,{"i":[{"n":"self"},{"g":["usize"],"n":"range"}],"o":{"n":"asciistr"}}],[11,"index_mut","","",2,{"i":[{"n":"self"},{"g":["usize"],"n":"range"}],"o":{"n":"asciistr"}}],[11,"index","","",2,{"i":[{"n":"self"},{"g":["usize"],"n":"rangeto"}],"o":{"n":"asciistr"}}],[11,"index_mut","","",2,{"i":[{"n":"self"},{"g":["usize"],"n":"rangeto"}],"o":{"n":"asciistr"}}],[11,"index","","",2,{"i":[{"n":"self"},{"g":["usize"],"n":"rangefrom"}],"o":{"n":"asciistr"}}],[11,"index_mut","","",2,{"i":[{"n":"self"},{"g":["usize"],"n":"rangefrom"}],"o":{"n":"asciistr"}}],[11,"index","","",2,{"i":[{"n":"self"},{"n":"rangefull"}],"o":{"n":"asciistr"}}],[11,"index_mut","","",2,{"i":[{"n":"self"},{"n":"rangefull"}],"o":{"n":"asciistr"}}],[11,"index","","",2,{"i":[{"n":"self"},{"n":"usize"}],"o":{"n":"asciichar"}}],[11,"index_mut","","",2,{"i":[{"n":"self"},{"n":"usize"}],"o":{"n":"asciichar"}}],[11,"clone","","",3,{"i":[{"n":"self"}],"o":{"n":"lines"}}],[11,"fmt","","",3,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"next","","",3,{"i":[{"n":"self"}],"o":{"g":["asciistr"],"n":"option"}}],[11,"clone","","",4,{"i":[{"n":"self"}],"o":{"n":"asasciistrerror"}}],[11,"eq","","",4,{"i":[{"n":"self"},{"n":"asasciistrerror"}],"o":{"n":"bool"}}],[11,"ne","","",4,{"i":[{"n":"self"},{"n":"asasciistrerror"}],"o":{"n":"bool"}}],[11,"fmt","","",4,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"valid_up_to","","Returns the index of the first non-ASCII byte.",4,{"i":[{"n":"self"}],"o":{"n":"usize"}}],[11,"description","","Returns a description for this error, like `std::error::Error::description`.",4,{"i":[{"n":"self"}],"o":{"n":"str"}}],[11,"fmt","","",4,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"as_ascii_str","","",2,{"i":[{"n":"self"}],"o":{"g":["asciistr","asasciistrerror"],"n":"result"}}],[11,"as_ascii_str_unchecked","","",2,{"i":[{"n":"self"}],"o":{"n":"asciistr"}}],[11,"as_mut_ascii_str","","",2,{"i":[{"n":"self"}],"o":{"g":["asciistr","asasciistrerror"],"n":"result"}}],[11,"as_mut_ascii_str_unchecked","","",2,{"i":[{"n":"self"}],"o":{"n":"asciistr"}}],[6,"Chars","","An immutable iterator over the characters of an `AsciiStr`.",null,null],[6,"CharsMut","","A mutable iterator over the characters of an `AsciiStr`.",null,null],[8,"ToAsciiChar","","Convert `char`, `u8` and other character types to `AsciiChar`.",null,null],[10,"to_ascii_char_unchecked","","Convert to `AsciiChar` without checking that it is an ASCII character.",5,{"i":[{"n":"self"}],"o":{"n":"asciichar"}}],[10,"to_ascii_char","","Convert to `AsciiChar`.",5,{"i":[{"n":"self"}],"o":{"g":["asciichar","toasciicharerror"],"n":"result"}}],[8,"AsAsciiStr","","Convert slices of bytes to `AsciiStr`.",null,null],[10,"as_ascii_str_unchecked","","Convert to an ASCII slice without checking for non-ASCII characters.",6,{"i":[{"n":"self"}],"o":{"n":"asciistr"}}],[10,"as_ascii_str","","Convert to an ASCII slice.",6,{"i":[{"n":"self"}],"o":{"g":["asciistr","asasciistrerror"],"n":"result"}}],[8,"AsMutAsciiStr","","Convert mutable slices of bytes to `AsciiStr`.",null,null],[10,"as_mut_ascii_str_unchecked","","Convert to a mutable ASCII slice without checking for non-ASCII characters.",7,{"i":[{"n":"self"}],"o":{"n":"asciistr"}}],[10,"as_mut_ascii_str","","Convert to a mutable ASCII slice.",7,{"i":[{"n":"self"}],"o":{"g":["asciistr","asasciistrerror"],"n":"result"}}]],"paths":[[4,"AsciiChar"],[3,"ToAsciiCharError"],[3,"AsciiStr"],[3,"Lines"],[3,"AsAsciiStrError"],[8,"ToAsciiChar"],[8,"AsAsciiStr"],[8,"AsMutAsciiStr"]]};
initSearch(searchIndex);
