
# <> exercise # 1

# numbers = [4, 643, 35, 7, 2, 67, 8] # / created list with random numbers

# min_number = numbers[0]  # // defined min_number as first number of the list 

# for number in numbers: # * created for loop 
#     if number < min_number:   # | if min_number is greater than number, max_number
#         min_number = number  # | will get value of next number in the list
# print(min_number)  # \ printed lowest number in the list

# <> exercise # 2

# numbers = [4, 643, 35, 7, 2, 67, 8] # / created list with random numbers

# max_number = numbers[0]  # // defined max_number as first number of the list 

# for number in numbers: # * created for loop
#     if number > max_number:  # | if number is greater than max_number it 
#         max_number = number  # | will get value of next number in the list

# print(max_number)   # \ printed highest number in the list

# <> exercise # 3

# countries = ["Georgia", "Spain", "Italy","Netherlands","Germany","Belgium"]

# print("Index of Georgia is:",countries.index("Georgia"))
# print("Index of Spain is:",countries.index("Spain"))
# print("Index of Italy is:",countries.index("Italy"))
# print("Index of Germany is:",countries.index("Germany"))

# <> exercise # 4

# int_list = [14, 46, 6]
# str_list = ["BMW", "Lexus", "Porsche"]

# # / Initialize an empty list to store the combined result
# combined_list = []

# # // Use a for loop with a range based on the length of the lists
# for i in range(len(int_list)):
#     combined_list.append(int_list[i])  # | Add integer
#     combined_list.append(str_list[i])  # \ Add string

# print(combined_list)


# <> exercise # 5 


# tuple = ["Georgia", 10, 16, "School", 15, "Car"]

# // Initialize two empty lists to store integers and strings separately
# str_list =[]
# int_list =[]

# # / Iterate through the indices of the combined list
# for i in range(len(tuple)):  
# # * Check if the element at index i is an integer
#     if type(tuple[i]) == int:
#         int_list.append(tuple[i]) # \ Add integer to int_list
# # | Check if the element at index i is a string
#     elif type(tuple[i]) == str:
#         str_list.append(tuple[i]) # \ Add string to str_list
# # // printed lists
# print("Integers list: ",int_list)
# print("Strings list",str_list)


# # <> exercise # 6


# list1 = [24,4,7,65,9] # // created first list
# list2 = [54,76,8,63,2] # / created second list

# odds_sum = 0 # * creating odd and even number elements
# evens_sum = 0 # * where summary of numbers will be saved 

# for number in list1 + list2: # \ merging 2 lists
#     if number % 2 == 0: # | checking if number is even 
#         evens_sum += number # * summerizing even numbers
#     else:  # // if number is odd than 
#         odds_sum += number # // this line will summerize odd numbers

# print("Sum of even numbers equels to:", evens_sum)

# print("Sum of odd numbers equels to:", odds_sum)

# # <> exercise # 7

# list1 = [24,4,7,65,9] # // created first list
# list2 = [54,76,8,63,2] # // created second list
# list3 = [22,3,45,36,79] # // created third list
# list4 = [12,15,67,49,32] # // created fourth list

# evens = []
# odds = []

# for number in list1 + list2 + list3 + list4:
#     if number % 2 == 0:
#         evens.append(number)
#     else:
#         odds.append(number)

# print("Even numbers list:", evens)

# print("Odd numbers list:", odds)


# # <> exercise # 8


# countries =["Georgia","Spain","Senegal","Colombia"]

# character_length =[]

# for country in countries:
#     character_length.append(len(country))


# print("Length of country characters:", character_length)

# # <> exercise 9

# str_list = ["I ","Love ","Georgia ","🙂"]

# int_list = [7,8,14,75,8]

# int_sum = sum(int_list)

# merged_str = ""


# for str in str_list:
#     merged_str += str

# print("Sum of all ints =", int_sum)

# print("Merged strings:", merged_str)


# <> exercise # 10

list = ["BMW","Lexus","Porsche","Mercedes","Ford"]

new_list = []


for i in range(len(list)):
    if i % 2 == 0:
        new_list.append(list[i])

print("Original list:", list)
print("New list:", new_list)