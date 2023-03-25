module.exports = {
    prompt: ({ inquirer }) => {
        const questions = [
            {
                type: "input",
                name: "name",
                message: "What is the component name?",
            },
            {
                type: "input",
                name: "dir",
                message: "Where is the directory? (No problem in blank)",
            },
            {
                type: "confirm",
                name: "have_props",
                message: "Is it have props?",
            },
        ];
        return inquirer.prompt(questions).then((answers) => {
            const { name, dir, have_props } = answers;
            const path = `${dir ? `${dir}/` : ``}${name}`;
            const abs_path = `src/components/${path}`;
            const alias_path = `./${path}`;
            const lower_name = name.toLowerCase();
            return { ...answers, path, abs_path, alias_path, lower_name };
        });
    },
};
