import random

def pick_random(items):
    return items[random.randint(0, len(items) - 1)]

stacks_to_generate = int(input("Enter the number of stacks to generate: "))

css_processors = ['SASS', 'LESS', 'Stylus', 'styled-components']
js_frameworks = ['React', 'Vue', 'Angular', 'Ember', 'Backbone']
data_fetching = ['REST', 'GraphQL']
backend_frameworks = ['NodeJS', 'Django', 'Flask', 'Falcon (Python)',
        'Rails', 'Spring (Java)', 'Spark (Java)', 'Go']
persistence = ['Plain File', 'CSV', 'XML', 'Redis', 'MySQL', 'Oracle', 'PostgreSQL',
        'MongoDB', 'Cassandra']

stack_template = """\
    CSS (Pre|Pos)-Processor: {0}
Front-end framework/library: {1}
              Data fetching: {2}
          Backend framework: {3}
                Persistence: {4}
"""

for _ in range(stacks_to_generate):
    js = pick_random(js_frameworks)
    css = pick_random(css_processors)

    while js is not 'React' and css is 'styled-components':
        css = pick_random(css_processors)

    fetching = pick_random(data_fetching)
    backend = pick_random(backend_frameworks)
    db = pick_random(persistence)

    print(stack_template.format(css, js, fetching, backend, db))

