import express from 'express';
import ejs from 'ejs';

const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let title = [];
let content = [];

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req,res)=>{
    res.render('index.ejs',{title,content});
});


app.get('/write', (req,res)=>{
    res.render('blog.ejs');
});

app.post('/write', (req, res) => {
    content.push(req.body.content);
    title.push(req.body.title);
    //console.log(`Title: ${req.body.title}, Content: ${req.body.content}`); 
    res.redirect('/');
});

app.get('/:slug/edit', (req, res) => {
    const slug = req.params.slug;
    const index = title.findIndex(t => 
        t.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (index !== -1) {
        res.render('edit.ejs', { title:title[index], content: content[index], index:index});
    } else {
        res.status(404).send('Post not found');
    }
    
});
app.post('/:slug/edit', (req, res) => {
    const index = req.body.index;
    content[index] = req.body.content;
    title[index] = req.body.title;
    res.redirect('/');
});

app.get('/:slug/delete', (req, res)=> {
    const slug = req.params.slug;
    let index = title.findIndex(t => 
        t.toLowerCase().replace(/\s+/g, '-') === slug
    );
    if (index !== -1) {
        title.splice(index, 1);
        content.splice(index, 1);
        res.redirect('/');
    } else {
        res.status(404).send('Post not found');
    }
});

app.get('/:slug', (req, res) => {
    const slug = req.params.slug;
    const index = title.findIndex(t => 
        t.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (index !== -1) {
        res.render('content.ejs', { title: title[index], content: content[index] });
    } else {
        res.status(404).send('Post not found');
    }
});