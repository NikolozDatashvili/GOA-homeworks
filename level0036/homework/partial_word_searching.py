def search_strings(query, seq):
    result = []
    
    # - Convert query to lowercase for case-insensitive comparison
    query_lower = query.lower()
    
    # <> Iterate through the array of strings
    for string in seq:
        # // If the lowercase version of the string contains the query, add to result
        if query_lower in string.lower():
            result.append(string)
    
    # / Return "None" if no matching strings were found
    if not result:
        return ["None"]
    
    return result


seq = ["home", "milk", "Mercury", "fish"]
query = str(input("please enter: "))
result = search_strings(query, seq)
print(result)
