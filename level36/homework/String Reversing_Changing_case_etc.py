def reverse_and_mirror(s1, s2):
    # Reverse and invert case of s2
    reversed_s2 = s2[::-1].swapcase()
    
    # Reverse and invert case of s1 and mirror it
    reversed_s1 = s1[::-1].swapcase()
    mirrored_s1 = reversed_s1 + reversed_s1[::-1]
    
    # Concatenate the results
    return f"{reversed_s2}@@@{mirrored_s1}"

# Example usage
print(reverse_and_mirror("Water", "Fish"))  # Output: "HSIf@@@RETAwwATER"
