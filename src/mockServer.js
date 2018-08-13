import { create } from 'apisauce';
import MockAdapter from 'axios-mock-adapter';

const api = create({ baseURL: 'http://dev-jtalent-api.jobsity.com' }).axiosInstance;

const mock = new MockAdapter(api, { delayResponse: 1500 });
mock.onGet('/challenges/id').reply(200, {
  data: {
    id: '8c144b3a-22aa-45cf-8524-f9291844c6d8',
    name: 'Hello World LIA Test',
    slug: 'hello-world-lia-test',
    createdAt: '2018-08-08T13:15:00+00:00',
    createdBy: '7cd85d9e-96b0-441c-ae3b-49f475fb0356',
    instructions: 'Write a function called `hello()` that:\n- If provided a `name` string, results in `Hello, name!`.\n- If not provided a name, results in `Hello there!`.',
    languages: [
      'javascript',
      'php',
    ],
    testSuite: [
      {
        language: 'javascript',
        tests: `let assert = require("chai").assert;\ndescribe('Challenge', function() {\n  it('should say hello', function() {\n    assert.equal(hello("Jobsity"), "Hello, Jobsity!");\n  });\n  it('should handle blank input', function() {\n    assert.equal(hello(""), "Hello there!");\n  });\n});`,
      },
      {
        language: 'php',
        tests: `class SayHelloSolution extends TestCase\n  {\n    public function testSaysHello()\n    {\n      $this->assertEquals("Hello, Jobsity!", hello("Jobsity"));\n    }\n\n    public function testHandlesBlankInput()\n    {\n      $this->assertEquals("Hello there!", hello(""));\n    }\n  }\n}`,
      }
    ],
    difficultyLevel: 'easy',
    max_time: '00:05:00',
  },
});

mock.onGet('/candidates/:id').reply(200, {
  data: {
    id: "b49bc530-9433-11e8-88d3-39619bf324e6",
    first_name: "Zoie",
    last_name: "Rogahn",
    date_of_birth: "1995-11-24",
    email: "domenick95@parker.biz",
    phone_number: "858.216.3346",
    seniority: null,
    photo: null,
    unemployed: true,
    speak_english: true,
    not_hired_message: null,
    notes: null,
    hr_interview: {
      current_job: "with_a_company",
      education: [],
      experience: [],
      skills: [
        {
          id: "b4428030-9433-11e8-a493-b70c21d3985c",
          name: "meteor",
          soft: false,
          years_experience: 1,
          months_experience: 3
        }
      ],
      tech_skills_comment: null,
      soft_skills_comment: null,
      fundamental_programming_level: "low",
      fundamental_programming_comment: "Aut deserunt esse accusantium. Consequuntur alias est sapiente et. Est dolorum et placeat aliquam voluptatem quos dolor.",
      english_written_level: "medium",
      english_spoken_level: "medium",
      english_comment: "Dolorem ut sunt maxime repellat doloribus non at sapiente. At sit et natus placeat tenetur.",
      passion_level: "low",
      passion_comment: "Dicta dolore ut aliquam provident sapiente necessitatibus qui. Provident libero quis sit veritatis rerum. Amet odit sunt veniam ut.",
      notes: "<p>Consectetur reprehenderit iste libero saepe qui quas doloremque. Corporis molestiae sit perspiciatis dicta. Ipsa similique nihil labore optio quibusdam.</p>",
    },
    city: {
      id: 517440,
      name: "Medellín",
      region: {
        id: 685,
        name: "Antioquia",
        country_id: 44
      },
      "country": {
        id: 44,
        name: "Colombia",
        code: "CO"
      }
    },
    professional_roles: [],
    processes: [
      {
        process: {
          id: "b4a3a390-9433-11e8-92c6-c1e2e4cea673",
          name: "Quas sed itaque atque quia.",
          description: "Saepe laborum maiores est. Et et ab qui enim quaerat asperiores.",
          due_date: null,
          client: {
            id: "a07622f0-9433-11e8-92af-6501822d3ea9",
            name: "Luettgen, O'Connell and Halvorson",
            logo: "http://localhosthttp://localhost/storage/clients/logo-test-1.jpg",
            website: "harris.info",
          },
          active: 1,
          candidates: [],
          skills: []
        },
        stage: {
          id: "b437ffc0-9433-11e8-8929-51628047318f",
          name: "Screening",
          order: 1
        }
      }
    ],
    stage: {
      id: "b435ab40-9433-11e8-aad7-f91cd4c23f46",
      name: "In Progress",
      order: 2
    },
    age: 22,
    created_at: "2018-07-30T20:04:02+00:00",
    updated_at: "2018-07-30T20:04:02+00:00"
  }
});

mock.onGet('/id').reply(200, {
  user: {
    id: "64b6ede0-8384-11e8-be59-090c7768ea0e",
    name: "Cordia Mills",
    email: "alexys.effertz@example.org",
    photo: {
        "original": null,
        "medium": null,
        "thumbnail": null
    },
    roles: [
      "evaluator"
    ],
    "active": 1,
  },
  session: {
    active: 0,
    id: 'id',
    language: 'javascript',
    code: '// type your code...',
  }
});

mock.onPost('/submit').reply(200, {
  tests: [
    {
      id: 0,
      name: 'Test without parameters',
      passed: true,
      expectedResult: 'Hello World!',
      testResult: 'Hello World',
    },
    {
      id: 1,
      name: 'Test with given name',
      passed: false,
      expectedResult: 'Hello, Jobsity!',
      testResult: 'Hi I am from Jobsity',
    },
    {
      id: 2,
      name: 'Sample test',
      passed: true,
      expectedResult: 'Hello World',
      testResult: 'Hello World',
    },
  ],
  executionTime: 1500, // time in milliseconds
  err: 'Error in sample.test.js: no such file found.',
})

mock.onPost('/test').reply(200, {
  tests: [
    {
      id: 0,
      name: 'Sample test',
      passed: true,
      expectedResult: 'Hello World',
      testResult: 'Hello World',
    },
  ],
  executionTime: 1500, // time in milliseconds
  err: '',
})

export { api };
