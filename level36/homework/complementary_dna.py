def complement_dna(dna):
    # Create an empty string to store the complementary DNA
    complement = ""
    
    # Loop through each nucleotide in the input DNA
    for nucleotide in dna:
        # Append the complement of each nucleotide to the result string
        if nucleotide == 'A':
            complement += 'T'
        elif nucleotide == 'T':
            complement += 'A'
        elif nucleotide == 'C':
            complement += 'G'
        elif nucleotide == 'G':
            complement += 'C'
    
    return complement

# Example usage
print(complement_dna("ATTGC"))  # Output: "TAACG"
print(complement_dna("GTAT"))   # Output: "CATA"
