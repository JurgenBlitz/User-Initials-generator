# User-Initials-generator

Many apps, like Trello, display the user's initials (name and surname) as a default avatar if the user has not uploaded an image. This code will take take a string and return the initials of the first and second 'words' that the string contains. It will *not* return a third initial if the user has included a second surname or a middle name(e.g. 'Howard Phillips Lovecraft' would return 'HP').

The method, however, will ignore spaces either before/after the name/surname, or spaces that might have been included in between the characters by mistake. Thus, something like '   Jur gen Blit z    ' will still return 'JB'.

If only one word is included (e.g. 'Jurgen') the method will return only one initial ('J').
