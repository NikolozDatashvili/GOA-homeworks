def remove_smallest(numbers):
    if len(numbers) == 0:
        return []
    min_number = min(numbers)
    copied_numbers = numbers.copy()
    copied_numbers.remove(min_number)
    return copied_numbers