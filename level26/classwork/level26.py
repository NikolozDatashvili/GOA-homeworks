# def print_multiplication(x,y):
#     return x * y
# """

# <>first = print_multiplication(43, 30)
# <>second = print_multiplication(3, 30)
# second = print_multiplication(3, 30)
# <>third = print_multiplication(9, 650)


# """

# print(f"Fist multipication is: {first} second is {second} and third is {third}")
def evens(num_list):
    new_list=[]
    for i in num_list:
        if i%2==0:
            new_list.append(i)
    
    return new_list

print(f"Even numbers in this list: {evens([15, 65, 32, 7, 12])}")