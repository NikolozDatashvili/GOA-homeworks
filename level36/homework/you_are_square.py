def is_square(n):
    if n < 0:
        return False
    i = 0
    while i * i <= n:  # Check the square of i
        if i * i == n:
            return True
        i += 1
    return False

# Example usage
print(is_square(-1))  # False
print(is_square(0))   # True
print(is_square(3))   # False
print(is_square(4))   # True
print(is_square(25))  # True
print(is_square(26))  # False
