This guide is a comprehensive deep-dive into the Zeerostock developer assignments. It is designed to move a beginner from "how to start" to "how to build a professional-grade submission.

- PART A: Inventory Search API + UI
    
    ## 1) Objective
    
    The goal of this project is to build a simple inventory search system for buyers to find surplus products from multiple suppliers. The system should allow users to search inventory by product name, category, and price range using a backend API and a basic frontend interface.
    
    ### What problem it solves
    
    When inventory grows, users cannot manually scan every item. A search feature helps them quickly filter products and find only the items they need.
    
    ### Final outcome
    
    By the end of the project, you should have:
    
    - A **GET `/search` API**
    - Filtering by:
        - product name (`q`, partial match)
        - category
        - minimum price
        - maximum price
    - A frontend with:
        - search input
        - category dropdown
        - price range inputs
        - results shown in a list or table
        - “No results found” state
    
    ## 2) Technical Requirements
    
    The assignment does not force a specific stack, so you can choose simple beginner-friendly tools.
    
    ### Recommended tools
    
    - **Frontend:** HTML, CSS, JavaScript
    - **Backend:** Node.js + Express
    - **Data source:** Static JSON file or in-memory array with 10–15 records
    - **Testing API:** Postman or browser
    - **Code editor:** VS Code
    - **Runtime:** Node.js 18+ recommended
    
    ### Basic prerequisites
    
    - Basic understanding of:
        - variables
        - arrays
        - objects
        - functions
        - HTTP requests
    - Node.js installed on your system
    - Browser installed for UI testing
    
    ## 3) Step-by-Step Implementation Guide
    
    ## Step 1: Understand what the API must do
    
    Before writing code, understand the assignment rules:
    
    - `GET /search`
    - Supports optional query parameters:
        - `q`
        - `category`
        - `minPrice`
        - `maxPrice`
    - Search must be **case-insensitive**
    - Filters can be used together
    - If no filters are given, return all results
    
    ## Step 2: Create sample inventory data
    
    Build a small dataset with 10–15 items, as required. Each item should include fields such as:
    
    - `id`
    - `productName`
    - `category`
    - `price`
    - `supplier`
    
    ## Step 3: Set up the backend project
    
    Create a backend folder and initialize a Node.js project.
    
    ### What to do
    
    - Create project folder
    - Run `npm init -y`
    - Install Express
    - Create a server file
    
    ## Step 4: Build the `/search` endpoint
    
    Create a GET route called `/search`.
    
    ### What this endpoint should do
    
    - Read query parameters from the request
    - Start with all inventory items
    - Apply filters one by one
    - Return the filtered result
    
    ### What to expect
    
    Calling URLs like these should work:
    
    - `/search`
    - `/search?q=chair`
    - `/search?category=furniture`
    - `/search?minPrice=100&maxPrice=500`
    
    ## Step 5: Add case-insensitive product search
    
    The assignment requires product name search to be case-insensitive.
    
    ### What to do
    
    Convert both:
    
    - the user’s search text
    - the product name in each record
    
    to lowercase before comparing.
    
    ## Step 6: Add category filtering
    
    Read the `category` query parameter and compare it with each item’s category.
    
    ### Why it is needed
    
    Users may want to narrow results to a product type such as electronics, furniture, or stationery.
    
    ### What to expect
    
    The API should return only items from the selected category.
    
    ## Step 7: Add min and max price filtering
    
    Read `minPrice` and `maxPrice` and check whether each item’s price falls within the range.
    
    ### Why it is needed
    
    Price filtering is one of the most common real-world search requirements.
    
    ### What to expect
    
    The API should include only items that match the allowed price range.
    
    ## Step 8: Handle combined filters
    
    The assignment says multiple filters can be combined.
    
    ### What to do
    
    Apply filters in sequence:
    
    1. product name
    2. category
    3. minimum price
    4. maximum price
    
    ### Why it is needed
    
    A user may search for:
    
    - product contains “desk”
    - category is “furniture”
    - price between 100 and 300
    
    ### What to expect
    
    Only records matching all selected conditions should be returned.
    
    ## Step 9: Handle edge cases
    
    The brief specifically asks you to handle:
    
    - empty search query
    - invalid price range
    - no matches
    
    ### How to handle them
    
    ### Empty search query
    
    If `q` is empty, do not break the API. Just ignore the name filter or treat it as “show all matching other filters”.
    
    ### Invalid price range
    
    If `minPrice > maxPrice`, return a friendly error message such as:
    
    `400 Bad Request: Invalid price range`
    
    ### No matches
    
    Return an empty array and let the frontend show “No results found”.
    
    ## Step 10: Build the frontend form
    
    Create a simple frontend with:
    
    - text input for search
    - dropdown for category
    - input for minimum price
    - input for maximum price
    - button to search
    
    ## Step 11: Fetch data from the backend
    
    Use JavaScript `fetch()` to call the API with query parameters based on user input.
    
    ### Why it is needed
    
    This connects the frontend to the backend.
    
    ### What to expect
    
    Results from the API will be received in JSON format and displayed on the page.
    
    ## Step 12: Display results in a list or table
    
    The brief allows either a list or table.
    
    ### What to show
    
    Each result can display:
    
    - product name
    - category
    - price
    - supplier
    
    ## Step 13: Show “No results found”
    
    If the backend returns an empty array, display a clear message.
    
    ### Why it is needed
    
    A blank screen can confuse users. A message confirms that the search worked, but no items matched.
    
    ## Step 14: Write a short README
    
    The assignment asks for:
    
    - search logic explanation
    - one performance improvement for large datasets
    
    ### What to include
    
    - How filtering works
    - How case-insensitive search is implemented
    - A future improvement such as:
        - using a database index
        - pagination
        - debounced search
        - full-text search engine
    
    ## 4) Project Structure
    
    ```
    inventory-search-project/
    ├── backend/
    │   ├── data/
    │   │   └── inventory.json
    │   ├── server.js
    │   └── package.json
    ├── frontend/
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    └── README.md
    ```
    
    ### Purpose of important files
    
    - `backend/data/inventory.json`
    Stores sample inventory records.
    - `backend/server.js`
    Contains Express server setup and `/search` route.
    - `backend/package.json`
    Stores project dependencies and scripts.
    - `frontend/index.html`
    Builds the UI layout.
    - `frontend/style.css`
    Adds basic styling.
    - `frontend/script.js`
    Handles form input, API calls, and result rendering.
    - `README.md`
    Explains logic, setup, and performance improvement idea.
    
    ## 5) Example Code Snippets
    
    ### Example: Sample inventory record
    
    ```
    {
    id:1,
    productName:"Office Chair",
    category:"Furniture",
    price:120,
    supplier:"ABC Traders"
    }
    ```
    
    ### Example: Read query parameters in Express
    
    ```
    app.get('/search', (req,res) => {
    const { q, category, minPrice, maxPrice }=req.query;
    res.json({ q, category, minPrice, maxPrice });
    });
    ```
    
    ### Example: Case-insensitive partial match
    
    ```
    constmatchesName=item.productName
    .toLowerCase()
    .includes(q.toLowerCase());
    ```
    
    ### Example: Price validation
    
    ```
    if (minPrice&&maxPrice&&Number(minPrice)>Number(maxPrice)) {
    returnres.status(400).json({ message:'Invalid price range' });
    }
    ```
    
    ### Example: Fetch from frontend
    
    ```
    fetch(`/search?q=chair&category=Furniture&minPrice=50&maxPrice=200`)
    .then(res =>res.json())
    .then(data =>console.log(data));
    ```
    
- PART B: Inventory Database + APIs
    
    ## 1) Objective
    
    The goal of this project is to design a small inventory system with suppliers and inventory items, then build APIs to add and fetch data. The project also requires one important grouped query: return all inventory grouped by supplier and sorted by total inventory value (`quantity × price`).
    
    ### Final outcome
    
    By the end of the project, you should have:
    
    - a supplier table/collection
    - an inventory table/collection
    - APIs:
        - `POST /supplier`
        - `POST /inventory`
        - `GET /inventory`
    - validation rules:
        - inventory must belong to a valid supplier
        - quantity must be `>= 0`
        - price must be `> 0`
    - one grouped query sorted by total inventory value
    
    ## 2) Technical Requirements
    
    ### Recommended beginner-friendly stack
    
    - **Backend:** Node.js + Express
    - **Database:** SQLite or PostgreSQL for SQL beginners
    - **Alternative:** MongoDB if you specifically want NoSQL
    - **API testing:** Postman
    - **Code editor:** VS Code
    - **Runtime:** Node.js 18+
    
    ## 3) Step-by-Step Implementation Guide
    
    ## Step 1: Understand the data model
    
    The brief requires 2 tables/collections:
    
    - **Suppliers**
        - `id`
        - `name`
        - `city`
    - **Inventory**
        - `id`
        - `supplier_id`
        - `product_name`
        - `quantity`
        - `price`
    
    ### Relationship
    
    One supplier can have many inventory items.
    
    ## Step 2: Set up the backend project
    
    Initialize a Node.js project and install:
    
    - Express
    - database package (`sqlite3`, `better-sqlite3`, `pg`, or similar)
    
    ## Step 3: Create the database schema
    
    Create two tables.
    
    ### Why this step matters
    
    The schema defines how data is stored and connected.
    
    ## Step 4: Add supplier creation API
    
    Create `POST /supplier`.
    
    ### What it should do
    
    Accept supplier details such as:
    
    - name
    - city
    
    ## Step 5: Add inventory creation API
    
    Create `POST /inventory`.
    
    ### What it should do
    
    Accept:
    
    - supplier_id
    - product_name
    - quantity
    - price
    
    ## Step 6: Validate supplier existence
    
    The brief says inventory must belong to a valid supplier.
    
    ### What to do
    
    Before inserting inventory:
    
    - check if the given `supplier_id` exists
    
    ## Step 7: Validate quantity and price
    
    Required rules:
    
    - `quantity >= 0`
    - `price > 0`
    
    ### Why it is needed
    
    These rules protect data quality.
    
    - Quantity should not be negative
    - Price should not be zero or negative
    
    ## Step 8: Create GET `/inventory`
    
    Build an endpoint to fetch inventory records.
    
    ### Why it is needed
    
    Users need a way to view saved inventory data.
    
    ## Step 9: Build the required grouped query
    
    The assignment requires:
    
    - all inventory grouped by supplier
    - sorted by total inventory value
    - total inventory value = `quantity × price`
    
    ### What to expect
    
    An output like:
    
    - Supplier A → total value 50,000
    - Supplier B → total value 32,000
    
    ## Step 10: Test all APIs
    
    Test:
    
    - creating supplier
    - creating inventory
    - invalid supplier
    - negative quantity
    - zero or negative price
    - fetching inventory
    - grouped query result
    
    ## Step 11: Write the README
    
    The assignment asks for:
    
    - database schema explanation
    - why you chose SQL or NoSQL
    - one indexing or optimization suggestion
    
    ### Good beginner explanation
    
    You can say:
    
    - SQL was chosen because the supplier-to-inventory relationship is structured and easy to model with foreign keys
    - an optimization would be adding an index on `supplier_id`
    
    ## 4) Project Structure
    
    ```
    inventory-database-project/
    ├── src/
    │   ├── db/
    │   │   ├── schema.sql
    │   │   └── connection.js
    │   ├── routes/
    │   │   ├── supplierRoutes.js
    │   │   └── inventoryRoutes.js
    │   ├── controllers/
    │   │   ├── supplierController.js
    │   │   └── inventoryController.js
    │   └── server.js
    ├── package.json
    └── README.md
    ```
    
    ### Purpose of important files
    
    - `src/db/schema.sql`
    Defines tables and relationships.
    - `src/db/connection.js`
    Connects your app to the database.
    - `src/routes/supplierRoutes.js`
    Contains `/supplier` route definitions.
    - `src/routes/inventoryRoutes.js`
    Contains `/inventory` route definitions.
    - `src/controllers/`
    Keeps API logic separate from route setup.
    - `src/server.js`
    Starts the server and connects all parts.
    - `README.md`
    Explains schema design, tech choice, and optimization idea.
    
    ## 5) Example Code Snippets
    
    ### Example: Supplier table idea
    
    ```
    CREATETABLE suppliers (
      idINTEGERPRIMARYKEY,
      name TEXTNOTNULL,
      city TEXTNOTNULL
    );
    ```
    
    ### Example: Inventory table idea
    
    ```
    CREATETABLE inventory (
      idINTEGERPRIMARYKEY,
      supplier_idINTEGERNOTNULL,
      product_name TEXTNOTNULL,
      quantityINTEGERNOTNULL,
      priceREALNOTNULL,
    FOREIGNKEY (supplier_id)REFERENCES suppliers(id)
    );
    ```
    
    ### Example: Quantity and price validation
    
    ```
    if (quantity<0) {
    returnres.status(400).json({ message:'Quantity must be 0 or more' });
    }
    
    if (price<=0) {
    returnres.status(400).json({ message:'Price must be greater than 0' });
    }
    ```
    
    ### Example: Check supplier existence
    
    ```
    constsupplier=awaitdb.get(
    'SELECT * FROM suppliers WHERE id = ?',
      [supplier_id]
    );
    
    if (!supplier) {
    returnres.status(400).json({ message:'Invalid supplier_id' });
    }
    ```
    
    ### Example: Group by supplier and sort by total value
    
    ```
    SELECT
      s.id,
      s.name,
      SUM(i.quantity* i.price)AS total_inventory_value
    FROM suppliers s
    JOIN inventory iON s.id= i.supplier_id
    GROUPBY s.id, s.name
    ORDERBY total_inventory_valueDESC;
    ```
    
- **Submission Guidelines:**
    - Hosted Link (Vercel/Render/Netlify + Backend on Render)
    - GitHub Repository (well-structured codebase)
    - README file with:
        - Tech stack
        - Features
        - How to run locally
        - Screenshots
    
      Submit Your Screen Record link 
    
    #### **Submission Details**
    
    1. **GitHub Repository Link:**
        
        👉 https://github.com/your-username/your-repo-name
        
    2. **Deployed / Published Application Link:**
        
        👉 https://your-frontend.vercel.app
        
    3. **Screen Recording (Drive Link):**
        
        👉 https://drive.google.com/file/d/your-screen-recording-link/view
