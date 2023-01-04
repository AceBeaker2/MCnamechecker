alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

keywords = []
for alpha1 in alphabets:
    for alpha2 in alphabets:
        for alpha3 in alphabets:
            keywords.append(alpha1+alpha2+alpha3)

textfile = open("3gen.txt", "w")
for element in keywords:
    textfile.write(element + "\n")
textfile.close()
