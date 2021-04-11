/**
 * MIT License

Copyright (c) 2017 deepakshajan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

var options = {
				   solution: 			[[null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,    'P',   null,   null,   null,    'A',   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,    'P',    'C',    'O',    'N',   null,   null,    'L',   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,    '4',   null,   null,    'I',   null,    'R',   null,    'F',    'O',    'U',    'R',   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,    'K',   null,   null,    'P',   null,    'T',   null,    'O',   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,    '1',    '2',    '8',    'B',    'Y',    'T',    'E',   null,    '3',   null,    'U',   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,    'B',   null,   null,   null,    'L',   null,   null,   null,    'R',    'A',    'M',   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,    'I',   null,   null,    'D',    'I',    'R',    'E',    'C',    'T',   null,   null,   null,   null,   null],
		        [null,   null,   null,    'P',    'O',    'R',    'T',    '0',   null,   null,    'N',   null,   null,   null,    'Y',   null,   null,   null,   null,   null],
		        [null,   null,   null,    'S',   null,   null,   null,   null,   null,    'H',    'E',    'X',   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,    'W',   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],


		            index: 				[[null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,      1,   null,   null,   null,      2,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,      3,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,      4,   null,   null,   null,   null,   null,   null,      5,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,      6,   null,      7,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,      8,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,      9,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,     10,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,     11,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		        [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],

		         questions_across: [	  "3.Which register is not bit addressable?",
							"5.Number of I/O ports in the 8051 microcontroller?",
							"6.Size of RAM",
							"8.General purpose memory is called as",
							"9.Which addressing mode is used in pushing or popping any element on or from the stack?",
							"10.Select the ports of 8051 that serve more than one function.",
							"11.What is the file extension that is loaded in a microcontroller for executing any instruction?"],

		         questions_down: [		 "1.In which port T0 and T1 pin is available?",
							"2.If we say microcontroller is 8-bit then here 8-bit denotes size of",
							"3.Which technique is used by Harvard Architecture?",
							"4.Size of internal ROM.",
							"5.Number of pins in 8051 microcontroller.",
							"7.What is the bit size of the 8051?",
							"10.When the microcontroller executes some arithmetic operations, then the flag bits of which register are affected?"]

	};


		cwp_nmsp.activateCWP(document.getElementById("myPuzzle"),false,options);