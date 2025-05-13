
# <> POP:

# <> exercise # 1
# integers = [14,645,7,5,4,7,35,13]

# print(integers.pop(7))

# <> exercise # 2

# strings = ["nika", "lion", "BMW", "gio"]
# print(strings)
# strings.pop(0)
# print(strings)
# strings.append("nika")
# print(strings)


# <> exercise # 3

# characters = ['A','|','#','@']

# print(characters.pop(2))

# <> exercise # 4


# tuples = ["BMW", 10, 5.5, True]

# print(tuples.pop(3))
# tuples.append(True)

# print(tuples[3])

# <> exercise # 5

# my_list = []

# try:
#     my_list.pop()
# except IndexError:                                  # / used try/except function to stop the
#     print("Cannot pop from an empty list!")         # / indexerror appearing and displayed my message 


# <> Count:

# <> exrcise # 1

# integers = [13,6,4,56,5,8,5,8,11]

# print(integers.count(5))
#  exrcise # 2

# <> exercise # 2 

# fruits = ["apple", "banana", "cherry", "pear", "pineapple", "grape"]
# # // Initialize a counter
# count_a = 0

# # \ Loop through each fruit in the list
# for fruit in fruits:
#     # * Count the occurrences of 'a' in the current fruit and add it to the counter
#     count_a += fruit.count('a')

# # / Print the result
# print(count_a)

# <> exercise # 3 

# bool_values = [True, False, True, True, False, False, True]

# # // Count the occurrences of True
# count_true = bool_values.count(True)

# # ! Print the result
# print(count_true)

# <> exercise # 4

# list = [[1, 2], [3, 4], [5, 6], [3, 4], [7, 8], [3, 4]]

# # ! Define the sublist to count
# sublist = [3, 4]

# # | Count the occurrences of the sublist
# count_sublist = list.count(sublist)

# # \ Print the result
# print(count_sublist)


# <> Max: 

# <> exercise # 1

# integers = [13, 6, 98, 56, 5, 15, 5, 8, 11]
# # // Initialize the maximum number with the first element of the list
# max_number = integers[0]

# # \ Loop through each number in the list
# for number in integers:
#     # | Update the maximum number if the current number is greater
#     if number > max_number:
#         max_number = number

# # / Print the result
# print("Greatest number is:"max_number)


# <> exercise # 2

# languages = ["Python", "Java", "C++", "JavaScript", "Ruby", "Swift"]

# # * Initialize the maximum length with the length of the first string
# max_length = len(languages[0])

# # | Loop through each string in the list
# for string in languages:
#     # \ Update the maximum length if the current string is longer
#     if len(string) > max_length:
#         max_length = len(string)

# # / Print the result
# print("Longest word is:",max_length, "characters long")

# <> exercise # 3

# ages = [25, 34, 29, 42, 31, 58, 22, 37]

# # // Find the oldest person's age
# oldest_age = max(ages)

# # / Print the result
# print("The oldest person's age is:", oldest_age)

# <> exercise # 4

# \ List of dates as tuples (year, month, day)
# dates = [
#     (2024, 6, 27),
#     (2024, 6, 25),
#     (2024, 6, 26),
#     (2024, 6, 29),
#     (2024, 6, 28)
# ]

# # // Find the most recent date using max function
# most_recent_date = max(dates)

# # | Convert the tuple back to a string for display
# print("The most recent date is:", f"{most_recent_date[0]}-{most_recent_date[1]}-{most_recent_date[2]}")

# <> Min:

# <> exercise # 1 

# # / List of integers
# numbers = [13, 6, 4, 56, 87, 8, 5, 8, 11]

# # \ Find the smallest number using min function
# smallest_number = min(numbers)

# # | Print the result
# print("The smallest number is:", smallest_number)

# <> exercise # 2

# # / List of strings
# words = ["apple", "banana", "kiwi", "strawberry", "grape"]

# # // Find the shortest word using min function
# shortest_word = min(words, key=len)

# # \ Print the result
# print("The shortest word is:", shortest_word)

# # <> exercise # 3
# # * List of daily temperatures
# temperatures = [72, 68, 75, 60, 77, 65, 70]

# # // Find the lowest temperature using min function
# lowest_temperature = min(temperatures)

# # \ Print the result
# print("The lowest temperature is:", lowest_temperature)

# <> exercise # 4

# # | List of product prices
# prices = [19.99, 5.49, 12.89, 3.75, 7.99, 15.00]

# # // Find the minimum price using min function
# minimum_price = min(prices)

# # / Print the result
# print("The minimum price is:", minimum_price)


# <> Sum:

# <> exercise # 1

# # ! List of integers
# numbers = [10, 20, 30, 40, 50]

# # \ Calculate the sum of all numbers
# total_sum = sum(numbers)

# # | Print the result
# print("The sum of all numbers is:", total_sum)

# <> exercise # 2

# # // List of strings
# strings = ["hello", "world", "python", "rocks"]

# # / Calculate the total length of all strings
# total_length = sum(len(s) for s in strings)

# # \ Print the result
# print("The total length of all strings is:", total_length)

# <> exercise # 3

# # | List of game results (scores)
# game_scores = [10, 15, 20, 25, 30]

# # / Calculate the total score using the sum function
# total_score = sum(game_scores)

# # // Print the result
# print("The total score of the team is:", total_score)

# <> exercise # 4
# # / Nested list of integers
# nested_lists = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]

# # | Calculate the flattened sum using list comprehension and sum function
# flattened_sum = sum(element for sublist in nested_lists for element in sublist)

# # \ Print the result
# print("The flattened sum is:", flattened_sum)


# <> Len:

# <> exercise # 1
# numbers = [5, 12, 7, 23, 9, 18, 34, 21, 15, 10]

# # / Find the length of the list
# length_of_list = len(numbers)

# # // Print the list and its length
# print("List of 10 integers:", numbers)
# print("The length of the list is:", length_of_list)
# <> exercise # 2
# | List of strings representing weekdays
weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

# \ Determine the number of elements in the list
num_of_days = len(weekdays)

# // Print the number of elements
print("The number of elements in the list is:", num_of_days)
# <> exercise # 3

nested_list = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
total_elements = sum(len(sublist) for sublist in nested_list)
print("The total number of elements across all sublists is:", total_elements)
