# MainStreetRevOps Repository

MainStreetRevOps is a minimal repository currently containing only a basic readme.md file. This repository appears to be intended for Revenue Operations development but is in its initial setup phase.

**CRITICAL: Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Repository State and Expectations

**Current Repository Status:**
- This is a minimal repository with only a readme.md file (contains single newline)
- No application code, build system, dependencies, or tests exist yet
- No package.json, requirements.txt, or other dependency files present
- No CI/CD pipelines configured (beyond GitHub Copilot workflow)
- Repository is suitable for new project initialization

**What DOES NOT Work:**
- `npm install` - fails because no package.json exists
- `npm run build` - fails because no package.json exists  
- `npm test` - fails because no package.json exists
- `python -m pip install -r requirements.txt` - fails because no requirements.txt exists
- Building/running applications - no application code exists

## Working Effectively

### Initial Repository Setup
Always start with these commands when working in the repository:

```bash
# Navigate to repository root
cd /home/runner/work/MainStreetRevOps/MainStreetRevOps

# Verify you're in the correct location
pwd
# Expected output: /home/runner/work/MainStreetRevOps/MainStreetRevOps

# Check repository status
git --no-pager status

# View repository structure
ls -la
# Expected output: .git/, .github/, readme.md
```

### Environment Validation
Validate your development environment with these commands:

```bash
# Check available tools and versions
node --version     # Expected: v20.19.4
npm --version      # Expected: 10.8.2  
python3 --version  # Expected: Python 3.12.3
git --version      # Expected: git version 2.51.0+

# Verify working directory and permissions
whoami            # Expected: runner
pwd               # Expected: /home/runner/work/MainStreetRevOps/MainStreetRevOps
```

### Basic Git Operations

**View Repository History:**
```bash
# View recent commits
git --no-pager log --oneline -10

# View all branches
git --no-pager branch -a

# View current branch status
git --no-pager status
```

**Working with Changes:**
```bash
# Check what files have changed
git --no-pager diff

# Add files to staging
git add <filename>

# Commit changes (use report_progress tool instead for actual commits)
# Do not run: git commit -m "message"
# Do not run: git push
```

**CRITICAL: Never use git commit or git push commands directly. Always use the report_progress tool to commit and push changes.**

## Project Initialization Scenarios

Since this is a minimal repository, you may need to initialize different types of projects. Here are validated approaches:

### JavaScript/Node.js Project Setup
If initializing a Node.js project:

```bash
# Initialize package.json
npm init -y

# Install common dependencies (example)
npm install express
npm install --save-dev jest eslint

# Verify installation
npm list
```

### Python Project Setup  
If initializing a Python project:

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Create requirements.txt
echo "requests==2.31.0" > requirements.txt

# Install dependencies
pip install -r requirements.txt

# Verify installation
pip list
```

### Common Development Files
When creating new projects, you may need these common files:

**For Node.js projects:**
- `package.json` - npm init -y
- `.gitignore` - Include node_modules/, dist/, .env
- `README.md` - Replace existing minimal readme.md

**For Python projects:**
- `requirements.txt` - List dependencies
- `.gitignore` - Include __pycache__/, venv/, .env
- `README.md` - Replace existing minimal readme.md

## Validation Requirements

### File Operation Validation
Always test file operations before including them in code:

```bash
# Test file creation
echo "test content" > test.txt
cat test.txt
rm test.txt

# Test directory operations
mkdir -p test/subdir
rmdir test/subdir
rmdir test
```

### Git Operation Validation
Before making changes, verify git operations work:

```bash
# Verify git tracking
git --no-pager status

# Check for untracked files
git --no-pager ls-files --others --exclude-standard

# View repository structure
find . -name ".git*" -o -name "*.md" -o -name "*.json" -o -name "*.txt" | head -10
```

## Development Workflows

### Making Changes
1. **Always start with repository validation commands**
2. **Create or modify files as needed**
3. **Test all commands before including them in code**
4. **Use report_progress tool to commit changes**

### Code Quality Checks
Currently no linting or formatting tools are configured. When adding them:

```bash
# For JavaScript projects, after npm init:
npm install --save-dev eslint prettier
npx eslint --init

# For Python projects:
pip install black flake8 mypy
```

### Testing Strategy
No test framework is currently configured. When adding tests:

**For Node.js:**
```bash
npm install --save-dev jest
# Add test script to package.json
# Run: npm test
```

**For Python:**
```bash
pip install pytest
# Create test files following pytest conventions
# Run: python -m pytest
```

## Troubleshooting

### Common Issues and Solutions

**"npm: command not found" or similar dependency errors:**
- This is expected - no package.json exists yet
- Initialize project first with `npm init -y` or appropriate setup commands

**"No such file or directory" errors:**
- Repository is minimal - most files don't exist yet
- Create necessary files as part of project initialization

**Git push/commit failures:**
- Do not use git commands directly
- Always use the report_progress tool for commits and pushes

**Permission denied errors:**
- You should have full access as 'runner' user
- Use `ls -la` to check file permissions
- Use `pwd` to verify current directory

### Expected Behaviors

**Working Operations:**
- File creation, reading, modification, deletion
- Directory operations (mkdir, rmdir, ls)
- Git status, log, diff, branch operations
- Tool version checks (node, npm, python3, git)
- Basic shell commands (cat, echo, pwd, whoami)

**Non-Working Operations (Until Project Initialized):**
- npm install/run commands
- Package manager operations for non-existent projects
- Build or test commands for non-existent code
- Application startup commands

## Quick Reference

### Repository Structure
```
MainStreetRevOps/
├── .git/           # Git repository data
├── .github/        # GitHub configuration
│   └── copilot-instructions.md  # This file
└── readme.md       # Minimal readme (single newline)
```

### Essential Commands
```bash
# Location and status
pwd && git --no-pager status

# View repository  
ls -la && git --no-pager log --oneline -5

# Environment check
node --version && npm --version && python3 --version

# File operations test
echo "test" > test.txt && cat test.txt && rm test.txt
```

### When Adding New Features
1. **Validate all commands work before documenting them**
2. **Test build times for any new build processes**  
3. **Document expected execution times**
4. **Always include "NEVER CANCEL" warnings for operations > 2 minutes**
5. **Use report_progress tool for all commits and pushes**
6. **Update these instructions when project structure changes**

**Remember: This repository is minimal and ready for project initialization. Most development workflows will require setting up the appropriate project structure first.**