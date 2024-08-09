### Actions workflow testing

I created this repo to help me learn how GitHub action works

#### Javascript Action Workflow

- **Name**: `greeting-workflow.yml`

- **Trigger**: The workflow is triggered by a push event to the repository.

- **Job**: The job named `greet` runs on an `ubuntu-latest` virtual machine.

- **Steps**:
  - **Checkout code**: Uses the `actions/checkout` action to check out the repository’s code so that subsequent steps can access it.
  - **Run Greeting Action**: Runs a custom 
