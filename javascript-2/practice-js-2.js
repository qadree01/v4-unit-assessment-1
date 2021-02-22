/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
 let gitHubDefinition = 'GitHub provides code hosting services that allow developers/people to build software for open source and private projects in organizations. It designs and develops an online platform to allows users to store and share codes repositories with friends, co-workers, classmates, and complete strangers.'

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = {
    description : 'This creates a hidden folder, .git, in the directory you want to place under version control, and creates an empty Git repository which contains the plumbing needed for Git to work.',
    code : 'git init'
};


//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description : 'This command is used to copy an existing Git repository from a server to the local machine.',
    code : 'git clone https://yourusername@bitbucket.org/username/projectname.git'
};

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description : 'This is used to check what files Git will add to your new repository. You can review the resulting list of files and  you can tell Git which of the files to place into version control (avoid adding files with confidential information such as passwords, or files that just clutter the repo).',
    code : 'git status'
};

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description : 'If all files in the list should be shared with everyone who has access to the repository, a single command will add everything in your current directory and its subdirectories.',
    code : 'git add .'
};

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description : 'Commit all the files that have been added, along with a commit message',
    code : 'git commit -m "Initial commit"'
};

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
let addRemote = {
    description : 'To add a new remote, use this command on the terminal, in the directory your repository is store at.',
    code : 'git remote add origin https://<your-git-service-address>/owner/repository.git'
};

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description : 'Used to copy your local repository to the remote repository',
    code : 'git push'
};