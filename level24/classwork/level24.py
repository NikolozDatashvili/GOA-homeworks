
# * Define a string
text = "I love coding!"

# \ capitalize() method: Capitalizes the first character of the string
capitalized_text = text.capitalize()
print("Capitalized:", capitalized_text)  
# | upper() method: Converts all characters in the string to uppercase
upper_text = text.upper()
print("Uppercase:", upper_text)
# ! lower() method: Converts all characters in the string to lowercase
lower_text = text.lower()
print("Lowercase:", lower_text)  
# <> count() method: Counts the number of occurrences of a substring in the string
count_is = text.count(" ")
print("Count of ' ':", count_is)  

# <> title() method: Capitalizes the first character of each word in the string
title_text = text.title()
print("Title:", title_text)  

# // Difference between function and method:
# // ფუნქცია არის კოდის ბლოკი რომელსაც აქვს თავისი დანიშნულება და მას ვიძახებთ თავისი უნიკალური სახელით
# // Example: len(text) is a function that returns the length of the string 'text'.

# / ფუნქცია არის მეთოდივით მაგრა იგი ასოცირებულია ობიექტთან 
# / Example: text.upper() is a method that converts the string 'text' to uppercase.
