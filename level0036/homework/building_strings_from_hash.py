def solution(pairs):
    result = ""
    first = True
    
    for key, value in pairs.items():
        if not first:
            result += ","
        result += f"{key} = {value}"
        first = False
    
    return result


print(solution({"a": 15, "b": '20'}))  
