var express = require('express');
var events = require('./src/static/events.json').events;
var orgs = require('./src/static/orgs.json').orgs;
var users = require('./src/static/users.json').users;
var user_events = require('./src/static/user_events.json').user_events;
var user_orgs = require('./src/static/user_orgs.json').user_orgs;
var eventtimes = require('./src/static/eventtimes.json').times;


var router = express.Router();

function getEvent(id) {
    for (var i = 0; i < events.length; i++) {
        if (events[i].id == id) {
            return events[i];
        }
    }
    return undefined;
}

function getOrg(id) {
    for (var i = 0; i < orgs.length; i++) {
        if (orgs[i].id == id) {
            return orgs[i];
        }
    }
    return undefined;
}

function getUser(id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return users[i];
        }
    }
    return undefined;
}

function userWithoutPass(user) {
    var user1 = Object.assign({}, user);
    delete user1.password;
    return user1;
}



router.get('/', function(req,res) {
    res.send("Welcome to the api!");
});

router.get('/events', function(req,res) {
    return res.json(events);
});

router.get('/events/:id', function(req,res) {
    var event = getEvent(req.params.id);
    if (event) {
        return res.json(event);
    }
    return res.status(404).json({"error": "Not found."})
});

router.get('/events/:id/times', function(req,res) {
    var times = [];
    for (var i = 0; i < eventtimes.length; i++) {
        if (eventtimes[i].event == req.params.id) {
            times.push(eventtimes[i]);
        }
    }
    return res.json({
        "count": times.length,
        "event_id": req.params.id,
        "times": times
    });
});




router.get('/orgs', function (req, res) {
    return res.json(orgs);
});

router.get('/orgs/:id', function(req,res) {
    var org = getOrg(req.params.id);
    if (org) {
        return res.json(org);
    }
    return res.status(404).json({"error": "Not found."})
});

router.get('/orgs/name/:name', function(req,res) {
    for (var i = 0; i < orgs.length; i++) {
        if (orgs[i].slug == req.params.slug) {
            return res.json(orgs[i]);
        }
    }
    return res.status(404).json({"error": "Not found."});
});

router.get('/orgs/:id/events', function(req,res) {
    var org_events = [];
    for (var i = 0; i < events.length; i++) {
        if (events[i].org == req.params.id) {
            org_events.push(events[i]);
        }
    }
    return res.json({
        "count": time.length,
        "org_id": req.params.id,
        "events": org_events
    });
});

router.get('/orgs/:id/users', function(req,res) {
    var org_users = [];
    for (var i = 0; i < user_orgs.length; i++) {
        if (user_orgs[i].org == req.params.id) {
            org_users.push(user_orgs[i]);
        }
    }
    return res.json({
        "count": org_users.length,
        "user_id": req.params.id,
        "org_users": org_users
    });
});




router.get('/users', function (req, res) {
    var new_users = [];
    for (var i = 0; i < new_users.length; i++) {
        new_users[i] = userWithoutPass(new_users[i]);
    }
    return res.json(users);
});

router.get('/users/:id', function(req,res) {
    var user = getUser(req.params.id);
    var tmp;
    if (user) {
        return res.json(userWithoutPass(user));
    }
    return res.status(404).json({"error": "Not found."})
});

router.get('/users/:id/orgs', function(req,res) {
    var orgs = [];
    for (var i = 0; i < user_orgs.length; i++) {
        if (user_orgs[i].user == req.params.id) {
            orgs.push(user_orgs[i]);
        }
    }
    return res.json({
        "count": orgs.length,
        "user_id": req.params.id,
        "orgs": orgs
    });
});

router.get('/users/:id/events', function(req,res) {
    var u_events = [];
    for (var i = 0; i < user_events.length; i++) {
        if (user_events[i].user == req.params.id) {
            u_events.push(user_events[i]);
        }
    }
    return res.json({
        "count": u_events.length,
        "user_id": req.params.id,
        "u_events": u_events
    });
});

router.get('/users/:id/hosted_events', function(req,res) {
    var u_events = [];
    for (var i = 0; i < events.length; i++) {
        if (events[i].host == req.params.id) {
            u_events.push(events[i]);
        }
    }
    return res.json({
        "count": u_events.length,
        "user_id": req.params.id,
        "u_events": u_events
    });
});


router.post('/auth', function(req,res) {
    var username = req.body.username;
    var password = req.body.password;
    var u;

    if (!username || !password) {
        return res.status(401).json({"error": "You must include username and password."});
    }

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            if (users[i].password == password) {
                u = Object.assign({}, users[i]);
                delete u.password;
                return res.status(200).json({"token": "heres-a-token", "user": u});
            } else {
                return res.status(401).json({"error": "Username and password do not match."});
            }
        }
    }
    return res.status(404).json({"error": "Username not found in database."});
});

module.exports = router;