# README Generator

## Bootcamp Challenge Week 9
This week's challenge was to write a command-line application to generate a professional README file with the following requirements:
1. Invoke the app using node.js.
2. Use the inquirer package.
3. Using the question prompts from inquirer, gather the user's project title, installation instructions, usage guidelines, license used, contribution guidelines, testing information, and email and github profile to be used in a questions section.
4. Include a Table of Contents that links to each section of the README.
5. From the user's license input, generate a badge at the top of the README that links to the license webpage. The user should be allowed to not choose a license, so if a license isn't chosen, there are no errors; the badge just isn't created.
6. From the user's license input, generate a license section in the README. If a license isn't chosen, the license section does not appear.
7. Since there is not webpage to deploy, include a video walkthrough of the app's functionality in your project's README.
8. The generated sample README should be included in your project's folders.

## Table of Contents
1. [Usage](#usage)
2. [Highlights of Process](#highlights-of-process)
3. [Contact Information](#contact-information)

## Usage
To use the app, before cloning the repository, make sure you have node.js and npm installed.

The video below walks through the steps to use the app. To summarize:
1. Start the app by opening the index.js folder in the terminal. 
2. Then in the terminal, type in node index.js. This will prompt the questions. Type your answers into the terminal.
3. When you have answered all of the questions, and you see a confirmation in the terminal that your file has been created, navigate to the folder you indicated in the file path question, and you will see your new README file.

(video here)

You can also view a link to the video here

* Note that the walkthrough video chooses a license, but there is an option to not choose one. If you don't choose a license (the 'None' option in the license question), the License section will not show on the README, the Table of Contents will not include the License section, and the badge and link to the license will not show at the top. 

## Highlights of Process
1. Note: This homework project included a small bit of starter code and a few instructions to follow to help get going:

![Index](https://user-images.githubusercontent.com/117301473/218532381-636eb254-a5e0-498a-b9e8-23e6807b331e.png)
![generateMarkdown](https://user-images.githubusercontent.com/117301473/218532567-ac75963e-796e-4bcf-9ea9-86e6fccfd273.png)

2. Creating the array of questions was very straightforward, although I did something different than the examples we used in class: because the starter code had an init function that was supposed to get everything started, instead of putting the array of questions in the .prompt function at the very top, I put the prompt in the init function and then passed through it the questions variable the questions objects was stored in. I also included the .then's within the init function, so that kept things tidy:

    ![Screenshot 2023-02-13 at 12 37 02 PM](https://user-images.githubusercontent.com/117301473/218545923-0da40293-b920-4e01-92c6-b3ce575156e3.png)

    ![Screenshot 2023-02-13 at 12 37 26 PM](https://user-images.githubusercontent.com/117301473/218546003-b3238b3f-603b-45cd-b05d-931b81fb61b0.png)

3. When writing the writeToFile function, first of all, I did not know why the fileName (which was in the starter code) would be a parameter, or why it would be needed. And no matter what I did, it only worked if I had data as a parameter (that was true all the way through the end). Initially, I just typed in the file name as a string in the fs.writeFile function, which is how we did it in class:

    ![Screenshot 2023-02-13 at 11 54 20 AM](https://user-images.githubusercontent.com/117301473/218536107-158e2b3d-8465-4c8e-8e3f-8ae8dc76c6a1.png)

    But then towards the end of my work, I realized I needed to submit a sample README generated from the app and include that in the project, not just generate my actual README (the one you're reading right now) from my app and submit. So I had to have a separate folder that would store the sample README, which meant I would have to include the path with the README file. And then I realized if someone was using the app, they might also want to indicate where to save their README, since the README would be generated in my cloned repo, but they would actually be using it for another repo of their own. So then using that fileName variable made sense. So I added a question for the user to indicate the file path and name, captured that in the generateMarkdown function as the fileName variable, and then passed fileName through the fs.writeFile function, so it could change with user input:

    ![Screenshot 2023-02-13 at 12 11 05 PM](https://user-images.githubusercontent.com/117301473/218538573-d57624ed-446f-4dad-b403-a63c8df8f6b0.png)

    ![Screenshot 2023-02-13 at 12 10 37 PM](https://user-images.githubusercontent.com/117301473/218538668-6650a651-12fd-4d35-988a-c8765bbdff8b.png)

4. Another process/challenge/success involved generating and writing the license to the markdown file. If the user didn't choose a license, an empty string was supposed to be returned. So initially, I wrote !license - return "":

    ![Screenshot 2023-02-13 at 12 53 00 PM](https://user-images.githubusercontent.com/117301473/218548517-3587b340-2648-4d2b-a198-825c963dae35.png)

    But then I realized with the list type in the inquirer questions, it didn't seem like you were allowed to not choose anything. So I added a 'None' option, and then instead of !license, the if statment included 'None' instead:

    ![Screenshot 2023-02-13 at 12 54 54 PM](https://user-images.githubusercontent.com/117301473/218548760-975bf421-5a0c-4949-b23b-8c6bb72b92d8.png)

    The one last problem I ran into with the no license option was that if there was no license, the license section didn't appear, but since my Table of Contents was written directly in the markdown function, the License section would still appear in the Table of Contents even if the actual section didn't appear. So I instead needed to add a function for the TOC that would modify the TOC if there was no license. That was the one function I added that was not included in the starter code:

    ![Screenshot 2023-02-13 at 12 58 39 PM](https://user-images.githubusercontent.com/117301473/218549443-66a3b70f-6e1a-4b2f-969f-5d8de0812ee0.png)


5. It took a while to figure out how to get the answers that were put into the generateMarkdown function back to the writeToFile function. In the end, I added another .then  after the initial .then to call the writeToFile function. I console.logged the variable I was passing into it, and it was the entire README text that I had just returned with the previous .then. I thought it would just return the user's answers again.

6. Things I needed to research: the validate function in inquirer (to make sure the user answered the questions), what badges were and how to get them on the page.

## Contact Information
Contact me directly at sarahgrichens@gmail.com or view my projects at https://github.com/srichens
