# CS 147

## TODO:

1. Fix `static` bundling issue and change absolute URLS to relative URLS.
2. Add Paralax background and a few other components to _"spice"_ up the UI.
3. Reconfigue `ESLINT`, `prettier`, and `tsconfig`.

## Development Instructions

To start the development server with hot reload:

```bash
cd src/
npm run dev
```

The code for the React web app is located in `apps/web/`

## Build Instructions

1. Run the Prettier formatting engine:

```bash
cd src/
npm run format
```

2. Run `eslint`:

```bash
npm run lint
```

3. Build the React web app:

```bash
npm run build
```

The build directory can be found in `apps/web/dist/`

4. Upload the `dist/` and `static` directories to the Stanford AFS server:
   **BEFORE THIS: MOVE ALL FILES ON MYTH AFS SERVER INTO `old` DIRECTORY TO PREVENT CONFLICTS**

```bash
scp apps/web/dist/* [SUNet ID]@myth.stanford.edu:/afs/ir/class/cs147/WWW/projects/BecomingIron-Man/Wavelength
scp -r apps/web/src/static [SUNet ID]@myth.stanford.edu:/afs/ir/class/cs147/WWW/projects/BecomingIron-Man/Wavelength
```

## Native App Development Instructions

1. Navigate to `apps/native` directory and run expo

```bash
cd src/native
npm start # you can also use: expo start
```

## Contributors

Connor Hogan  
Corbin Schmeil  
Sebastian James  
Steven Kohl
