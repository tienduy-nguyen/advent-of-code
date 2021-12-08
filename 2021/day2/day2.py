def get_data(filename):
    with open(filename) as file:
        lines = file.read().splitlines()
    return [(direction, int(n)) for direction, n in (line.split() for line in lines)]


def follow_course(course):
    horizontal_position = 0
    depth = 0
    aim = 0
    for direction, n in course:
        if direction == "forward":
            horizontal_position += n
            depth += aim * n
        elif direction == "up":
            aim -= n
        elif direction == "down":
            aim += n
    return horizontal_position, depth, aim


def part_1(horizontal_position, _, aim):
    return horizontal_position * aim


def part_2(horizontal_position, depth, _):
    return horizontal_position * depth


if __name__ == "__main__":
    sample_data = get_data('day2_input_sample')
    hda_sample = follow_course(sample_data)
    assert part_1(*hda_sample) == 150
    assert part_2(*hda_sample) == 900

    challenge_data = get_data('day2_input')
    hda_challenge = follow_course(challenge_data)
    print(part_1(*hda_challenge))
    print(part_2(*hda_challenge))