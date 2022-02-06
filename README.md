# CS 147

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

4. Upload the `dist/` directory to the Stanford AFS server:

```bash
scp apps/web/dist/* [SUNet ID]@myth.stanford.edu:/afs/ir/class/cs147/WWW/projects/BecomingIron-Man/Wavelength
```

## Contributors

Connor Hogan  
Corbin Schmeil  
Sebastian James  
Steven Kohl
