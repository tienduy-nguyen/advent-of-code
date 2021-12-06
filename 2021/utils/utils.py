def read_data(filename):
    with open(filename) as file:
        return [int(i) for i in file.read().splitlines()]

