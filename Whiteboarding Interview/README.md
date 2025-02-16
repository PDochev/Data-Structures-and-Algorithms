# Whiteboarding Interview

## 1. Clarify the Problem

Software development is full of ambiguity. Programming requires concrete deliverables, but company needs can be murky. Even when the need is clear, a feature could have dozens of possible implementations. The ability to clearly define a problem is an important skill to demonstrate.

When the interviewer presents their technical question, repeat the question back to the interviewer in your own words. This gives you a moment to think and will resolve any glaring misunderstandings.

Once you’ve repeated the question, ask every clarifying question that comes to mind.

Assumptions must be communicated to the interviewer so there is agreement on the scope of the problem.

For example, if asked:

Write a function that returns duplicate characters in string.

Here are some questions which may come to mind:

What is the desired return value?
True|False, a list of characters, or …?

Do punctuation and spaces count as “characters”?

Should case be considered?
are "a" and "A" duplicates?

Should we be checking for Unicode characters?

Can we assume it’s a 26 character alphabet?

## 2. Create Inputs and finding edge cases

When the question is clear, we then produce concrete inputs and outputs. These inputs guide a solution for the remainder of the interview so write them on the board!

You may still be unclear how to solve the problem in code, but it’s certain that given an input, X, your function will produce an output, Y.

Make one input the happy path: input that reflects a common scenario.

For example, you’re asked to write a function which capitalizes the first letter of an input string.

A good input could be "apple", which returns "Apple" because this demonstrates the function’s purpose.

If the input were "Apple", it would return "Apple". That’s correct but less informative.

Also think about edge cases, or inputs which do not reflect a common scenario and may cause problems.

For the capitalization function, what should you return if given None as input? Or a number? Or an empty string? Or a special character?

## 3. Outline the Solution

It’s time to start breaking down the problem by category.

Given a question which requires the use of a stack, what do you know about stacks? Have you encountered other problems that use stacks and how were they solved?

Is this a searching question? Can you sort the input and will that help? Does this problem sound like it can be modeled as a graph, with vertices and connected edges?

Understanding the applications of different data structures is very useful! The more questions you practice, the more you will be able to see patterns between problems.

This step varies the most because it requires details of the specific problem, but regardless of the question make certain you are communicating with the interviewer as a potential co-worker. Show them your thought process!

During this step, the interviewer may make suggestions on how to proceed. Acknowledge the interviewer and incorporate their suggestions into your approach.

**Don’t disregard their input! It gives the impression you would be difficult to work with on the job.**

When you and the interviewer are satisfied with a workable solution, write the steps next to your input. Follow these steps as you write code on the board.

## 4. Code the Solution

Writing code on the board is a collaborative process. Refer to your outline and explain the step you’re implementing.

The goal is to be facing the interviewer when talking through the implementation and facing the board when you’re writing the code.

Try to avoid writing code in silence or narrating at a low level like “for… i… in… range… length of the list… colon” when writing for i in range(len(input_list))

When you’re finished with the implementation, look it over for any mistaken syntax or logical errors.

## 5. Test the Solution

With a working implementation on the whiteboard, use the test inputs to walk through the evaluation of your code.

Write out any temporary variables on the board and update them when they change during execution.

This is another opportunity to showcase your communication skills, and will help you catch any logical errors which you may not have noticed in earlier steps.

If you catch an error, don’t panic! Mistakes happen. Explain the issue and talk through what you can do to fix the bug.

Your interviewer may want to see you write the correction or they may be satisfied with the explanation. Either way, you’ve demonstrated your ability to debug and problem solve.

## 6. Analyze the Solution

Analyze the time and space complexity of the solution. With this step you are demonstrating that you care about the efficiency of your code.

Explain your code’s big O notation. If you can optimize to a more efficient runtime, explain how that would work. If you can’t optimize, explain why it’s not possible.

### References

- [Codecademy](https://www.codecademy.com)
