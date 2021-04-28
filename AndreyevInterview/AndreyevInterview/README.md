# Invoicing Application 

## Front End - Vue.js

You will need to install Yarn and Node.js prior to this.

This is contained in the `andreyev-interview` folder. You can run this project by doing the following:

```
# Change to the folder
cd andreyev-interview

# Restore the dependencies
yarn install

# Run the app
yarn serve
```

## Back End - .NET 5

You will need to install the latest dotnet toolchain that supports .NET 5. The simplest approach is to install the latest version of Visual Studio.

You can open the `.sln` from Visual Studio to get started.

### Running the database migrations

To run the database migrations, install the Entity Framework Core tools from https://docs.microsoft.com/en-us/ef/core/cli/dotnet.

Then run the following:

```
# Change into the folder
cd AndreyevInterview

# Run the database migrations
dotnet ef database update
```

### Running the server

You can run the application using Visual Studio. Select the `AndreyevInterview` option instead of `IIS Express` when running in Visual Studio to run the server using Kestrel.

The front end has been set up to expect the backend to be available at `http://localhost:5000`. This will be the case if you run the back end using Kestrel.