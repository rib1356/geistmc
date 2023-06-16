import {execa} from 'execa';
(async () => {
	try { 
		const { stdout } = await execa("git", ["diff-index", "HEAD"]);
		if (stdout) {
			console.log("Please stash or commit changes first!");
			process.exit(1);
		} else { 
			await execa("git", ["checkout", "--orphan", "gh-pages"]);
			console.log("Building...");
			await execa("npm", ["run", "build"]);
			await execa("git", ["--work-tree", 'dist', "add", "--all"]);
			await execa("git", ["--work-tree", 'dist', "commit", "-m", "gh-pages"]);
			console.log("Pushing to gh-pages...");
			await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
			await execa("git", ["checkout", "-f", "main"]);
			await execa("git", ["branch", "-D", "gh-pages"]);
			console.log("Successfully deployed");
		}
	}  catch (e) {
		console.log(e.message);
		process.exit(1);
	}

  })();