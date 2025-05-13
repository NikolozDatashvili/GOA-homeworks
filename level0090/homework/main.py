
#<>Categorize New Member

def open_or_senior(data):
    result = []
    for member in data:
        if member[0] >= 55 and member[1] > 7:
            result.append("Senior")
        else:
            result.append("Open")
    return result
print(open_or_senior([(45, 12),(55,21),(19, -2),(104, 20)]))

#<> Count number of zeros from 1 to N
def count_zeros(x):
    count = 0
    for num in range(1, x + 1):
        num_str = str(num)
        for i in num_str:
            if i == "0":
                count += 1
    return f"Zero count =  {count}"


print(count_zeros(200))



#<> mini calculator
def calculator(x, y, op):
    if (type(x) not in [int, float]) or (type(y) not in [int, float]) or op not in ['+', '-', '*', '/']:
        return "unknown value"
    
    if op == "+":
        return x + y
    elif op == "-":
        return x - y
    elif op == "*":
        return x * y
    elif op == "/":
        if y == 0:
            return "unknown value"
        return x / y


#<> battle of the characters 

def battle(x, y):
    power_x = 0
    for i in range(len(x)):
        power_x += ord(x[i])-64
    power_y = 0
    for j in range(len(y)):
        power_y += ord(y[j])-64
    if power_x > power_y:
        return x
    elif power_x < power_y:
        return y
    else:
        return "Tie!"