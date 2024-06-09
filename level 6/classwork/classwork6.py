num1 = int(input()) # <> first number
num2 = int(input()) # <> second number
num3 = int(input()) # <> third number 
num4 = int(input()) # <> fourth number

math_symbols = input()  # <> variable for math symbols which will be inputed by user
 

if math_symbols == "*":            
    print(num1 * num2 * num3 * num4) 
elif input() == "+":
    print(num1 + num2 + num3 + num4)
elif input() == "-":
    print(num1 - num2 - num3 - num4)
elif input() == "/":
    print(num1 / num2 / num3 / num4)
else:
    print("Invalid symbol")    
