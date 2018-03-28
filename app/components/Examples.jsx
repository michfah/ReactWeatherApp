var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h2 className="text-centered page-title">Examples</h2>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Dublin'>Dublin, Ireland</Link>
                </li>
                <li>
                    <Link to='/?location=Tbilisi'>Tbilisi, Georgia</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;