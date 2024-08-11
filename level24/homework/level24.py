
# <> exercise #1
# def manual_count(string, count_char):
#     count = 0
#     for char in string:
#         if char == count_char:
#             count += 1
#     return count
# print(manual_count("Hello%$#","l"))

# # <> islower(1)
# text = "hello"
# print(text.islower())

# # <> islower(2)
# text = "Hello"
# print(text.islower())  # Output: False

# # <> islower(3)

# def check_case(text):
#     if text.islower():
#         print(f"The string '{text}' is completely lowercase.")
#     else:
#         print(f"The string '{text}' is not completely lowercase.")

# check_case(input("Please enter text: ")) 

# # <> islower(4)

# def count_lowercase(text):
#     lowercase_count = sum(1 for char in text if char.islower())
#     print(f"Number of lowercase letters in '{text}': {lowercase_count}")

# count_lowercase(input("Please enter text: ")) 

# <> islower(5)
# def analyze_lowercase(text):
#     if text.islower():
#         print(f"The entire string '{text}' is in lowercase.")
#     else:
#         lowercase_letters = [char for char in text if char.islower()]
#         print(f"Lowercase letters in '{text}': {lowercase_letters}")
#         print(f"Count of lowercase letters: {len(lowercase_letters)}")

# analyze_lowercase(input("Please enter text: "))

# <> Using all of these methods islower(), isuper(), isnumeric(), isalpha().
def analyze_string(text):
    lower_count = 0
    upper_count = 0
    numeric_count = 0
    alpha_count = 0
    other_count = 0

    for char in text:
        if char.islower():
            lower_count += 1
        elif char.isupper():
            upper_count += 1
        elif char.isnumeric():
            numeric_count += 1
        elif char.isalpha():
            alpha_count += 1
        else:
            other_count += 1

    print(f"Analysis of the string '{text}':")
    print(f"Lowercase letters: {lower_count}")
    print(f"Uppercase letters: {upper_count}")
    print(f"Numeric characters: {numeric_count}")
    print(f"Alphabetic characters (total): {lower_count + upper_count}")
    print(f"Non-alphabetic, non-numeric characters, spaces: {other_count}")


# Test the program
sample_text = input("Plese enter text here: ")
analyze_string(sample_text)
