### Actions workflow testing

I created this repo to help me learn how GitHub action works

#### Javascript Action
- **Name**: `.github/workflows/greeting-workflow.yml`
- **Trigger**: The workflow is triggered by a push event to the repository.
- **Job**: The job named `greet` runs on an `ubuntu-latest` virtual machine.
- **Steps**:
  - **Checkout code**: Uses the `actions/checkout` action to check out the repository’s code so that subsequent steps can access it.
  - **Run Greeting Action**: Runs a custom action defined in `.github/actions/greet-action`, passing `World` as an input parameter to the action.

#### Reusable Workflow - workflow calling another workflow

- **Name**: `.github/workflows/use-central-workflow.yml`
- **Trigger**: The workflow is triggered by a push event to the `main` branch.
- **Job**: The job named `call-central-workflow` uses a reusable workflow from a different repository.
  - **Workflow Source**: 
    - Uses the workflow defined in `shukfanchung/central-workflow-test/.github/workflows/central-workflow.yml` from the `main` branch of the specified repository. 
  - **Inputs**:
    - `example_input`: Passes the value `'Hello From Caller Action'` to the central workflow.
