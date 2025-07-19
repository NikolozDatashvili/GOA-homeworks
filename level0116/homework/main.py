
#<> exercise N1
arr = [21,53,65,223,6,1,64]

doubler = map(lambda x:  x*2, arr)
doubled = list(doubler)
print(doubled)

#<> exercise N2

odds = filter(lambda x: x % 2 != 0, arr)
oddList = list(odds)
print(oddList)

#<> exercise N3
words = ["hello", "random", "wow"]

capitalizer = map(lambda word: word.capitalize(), words)
capitalized = list(capitalizer)
print(capitalized)

#<> exercise N4

lengthChecker = filter(lambda word: len(word)> 5, words )
lengthChecked = list(lengthChecker)

print(lengthChecked)

#<> exercise N5

persons = [{
    "name": "nika",
    "age": 23
},{
    "name": "gio",
    "age": 13
},{
    "name": "lado",
    "age": 26
}]

personSort = sorted(persons, key=lambda x: x["age"])

personsList = list(personSort)
print(personsList)