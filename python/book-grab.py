import json
import sys
from pathlib import Path
import datetime

import yaml


def extract_yaml_metadata(md_file_path):
    """
    Extract YAML front matter from a Markdown file.

    Assumes the YAML block is at the very beginning of the file,
    delimited by lines containing only '---'.

    Returns:
        A dictionary containing the parsed YAML data, or None if not found.
    """
    try:
        with open(md_file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error reading file {md_file_path}: {e}", file=sys.stderr)
        return None

    if not lines or lines[0].strip() != '---':
        return None  # No YAML front matter found.

    yaml_lines = []
    # Skip the first '---' line and then collect YAML until we hit a closing '---'
    for line in lines[1:]:
        if line.strip() == '---':
            break
        yaml_lines.append(line)

    if not yaml_lines:
        return None

    yaml_content = "".join(yaml_lines)
    try:
        data = yaml.safe_load(yaml_content)
    except yaml.YAMLError as e:
        print(f"Error parsing YAML in file {md_file_path}: {e}", file=sys.stderr)
        return None
    return data


def default_serializer(o):
    """
    JSON serializer for objects not serializable by default json code
    (like date and datetime objects).
    """
    if isinstance(o, (datetime.date, datetime.datetime)):
        return o.isoformat()
    raise TypeError(f"Object of type {type(o)} is not JSON serializable")


def main(directory, output_file):
    """
    Walk through the given directory looking for .md files,
    extract YAML metadata from each, and write a JSON file.
    """
    notes = []
    path_obj = Path(directory)

    # Use rglob to search recursively for *.md files
    for md_file in path_obj.rglob("*.md"):
        metadata = extract_yaml_metadata(md_file)
        if metadata is not None:
            # Optionally, include the file path in the metadata
            metadata['file'] = str(md_file)
            notes.append(metadata)

    # Write the metadata list to a JSON file with pretty printing.
    # Use the default_serializer to handle non-serializable objects like dates.
    try:
        with open(output_file, 'w', encoding='utf-8') as out:
            json.dump(notes, out, ensure_ascii=False, indent=2, default=default_serializer)
        print(f"Processed {len(notes)} file(s). Output written to {output_file}.")
    except Exception as e:
        print(f"Error writing output file {output_file}: {e}", file=sys.stderr)


if __name__ == '__main__':
    # Hard-code the directory you want to search and the output JSON file
    directory = "C:/Users/trend/PycharmProjects/OB_Notes/Logs/Reading"  # Update this path as needed
    output_file = "metadata.json"  # Update the output file name/path if needed

    main(directory, output_file)

