import random

def secret_santa(participants):
    if len(participants) < 2:
        print("There must be at least two participants.")
        return
    
    # Shuffle participants and create assignments
    shuffled = participants[:]
    while True:
        random.shuffle(shuffled)
        if all(participant != shuffled[i] for i, participant in enumerate(participants)):
            break
    
    # Print assignments
    for giver, receiver in zip(participants, shuffled):
        print(f"{giver} -> {receiver}")

if __name__ == "__main__":
    participants = [
        "Alice",
        "Bob",
        "Charlie",
        "Diana",
        "Eve"
    ]
    secret_santa(participants)
