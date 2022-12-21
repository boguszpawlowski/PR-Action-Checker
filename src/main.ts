import * as core from '@actions/core'
import * as github from '@actions/github'

function run(): void {
  try {
    const prBody = github.context.payload.pull_request?.body
    if (prBody?.includes("[ ]") === false) {
      core.setFailed("Not all the tasks have been completed")
    }

  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
