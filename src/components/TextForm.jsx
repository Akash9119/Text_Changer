import React, { useState } from 'react';
import './TextForm.css';

function TextForm(props) {
    const [text, setText] = useState('');
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState('case');

    const isDark = props.mode === 'dark';

    // ============ CORE TEXT CASE OPERATIONS ============
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("✨ Converted to UpperCase!", "success")
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("✨ Converted to LowerCase!", "success")
    }

    const handleCapitalizeClick = () => {
        const newText = text.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ');
        setText(newText);
        props.showAlert("✨ Capitalized Each Word!", "success")
    }

    const handleCapitalizeSentence = () => {
        const newText = text.split(/([.!?]+\s+)/).map((part, index) => {
            if (index % 2 === 0) {
                return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
            }
            return part;
        }).join('');
        setText(newText);
        props.showAlert("✨ Capitalized Sentences!", "success")
    }

    const handleInvertClick = () => {
        const newText = text.split('').map(char => 
            char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        ).join('');
        setText(newText);
        props.showAlert("✨ Case Inverted!", "success")
    }

    const handleRandomCase = () => {
        const newText = text.split('').map(char => 
            Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
        ).join('');
        setText(newText);
        props.showAlert("🎲 Random Case Applied!", "success")
    }

    // ============ TEXT REARRANGEMENT & INVERSION ============
    const handleReverseClick = () => {
        const newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("🔄 Text Reversed!", "success")
    }

    const handleReverseWords = () => {
        const newText = text.split(' ').reverse().join(' ');
        setText(newText);
        props.showAlert("🔄 Word Order Reversed!", "success")
    }

    const handleReverseLines = () => {
        const newText = text.split('\n').reverse().join('\n');
        setText(newText);
        props.showAlert("🔄 Line Order Reversed!", "success")
    }

    const handleSortLinesAsc = () => {
        const newText = text.split('\n').sort().join('\n');
        setText(newText);
        props.showAlert("📊 Lines Sorted (A-Z)!", "success")
    }

    const handleSortLinesDesc = () => {
        const newText = text.split('\n').sort().reverse().join('\n');
        setText(newText);
        props.showAlert("📊 Lines Sorted (Z-A)!", "success")
    }

    const handleSortWords = () => {
        const newText = text.split(/\s+/).sort().join(' ');
        setText(newText);
        props.showAlert("📊 Words Sorted Alphabetically!", "success")
    }

    // ============ WHITESPACE & FORMATTING OPERATIONS ============
    const handleTrimSpaces = () => {
        const newText = text.split('\n').map(line => line.trim()).join('\n');
        setText(newText);
        props.showAlert("✂️ Spaces Trimmed!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ").trim();
        setText(newText);
        props.showAlert("🚀 Extra Spaces Removed!", "success")
    }

    const handleRemoveBlankLines = () => {
        const newText = text.split('\n').filter(line => line.trim().length > 0).join('\n');
        setText(newText);
        props.showAlert("📝 Blank Lines Removed!", "success")
    }

    const handleIndentText = () => {
        const newText = text.split('\n').map(line => '  ' + line).join('\n');
        setText(newText);
        props.showAlert("→ Text Indented!", "success")
    }

    const handleUnindentText = () => {
        const newText = text.split('\n').map(line => line.replace(/^  /, '')).join('\n');
        setText(newText);
        props.showAlert("← Text Unindented!", "success")
    }

    // ============ CHARACTER-LEVEL OPERATIONS ============
    const handleRemovePunctuation = () => {
        const newText = text.replace(/[!\"?.,;:@#$%^&*()_+=\[\]{}'`~\-\/\\|<>]/g, '');
        setText(newText);
        props.showAlert("✂️ Punctuation Removed!", "success")
    }

    const handleRemoveDigits = () => {
        const newText = text.replace(/[0-9]/g, '');
        setText(newText);
        props.showAlert("🔢 Digits Removed!", "success")
    }

    const handleKeepLettersOnly = () => {
        const newText = text.replace(/[^a-zA-Z\s]/g, '');
        setText(newText);
        props.showAlert("🔤 Only Letters Kept!", "success")
    }

    const handleKeepNumbersOnly = () => {
        const newText = text.replace(/[^0-9]/g, '');
        setText(newText);
        props.showAlert("🔢 Only Numbers Kept!", "success")
    }

    // ============ ENCODING & CONVERSION ============
    const handleBase64Encode = () => {
        try {
            const newText = btoa(unescape(encodeURIComponent(text)));
            setText(newText);
            props.showAlert("🔐 Base64 Encoded!", "success")
        } catch (e) {
            props.showAlert("❌ Encoding failed!", "danger")
        }
    }

    const handleBase64Decode = () => {
        try {
            const newText = decodeURIComponent(escape(atob(text)));
            setText(newText);
            props.showAlert("🔓 Base64 Decoded!", "success")
        } catch (e) {
            props.showAlert("❌ Decoding failed!", "danger")
        }
    }

    const handleURLEncode = () => {
        const newText = encodeURIComponent(text);
        setText(newText);
        props.showAlert("🔗 URL Encoded!", "success")
    }

    const handleURLDecode = () => {
        try {
            const newText = decodeURIComponent(text);
            setText(newText);
            props.showAlert("🔗 URL Decoded!", "success")
        } catch (e) {
            props.showAlert("❌ Decoding failed!", "danger")
        }
    }

    const handleHTMLEncode = () => {
        const newText = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        setText(newText);
        props.showAlert("📄 HTML Encoded!", "success")
    }

    const handleHTMLDecode = () => {
        const newText = text
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'");
        setText(newText);
        props.showAlert("📄 HTML Decoded!", "success")
    }

    const handleROT13 = () => {
        const newText = text.replace(/[a-zA-Z]/g, function(char) {
            return String.fromCharCode((char <= 'Z' ? 90 : 122) >= (char = char.charCodeAt(0) + 13) ? char : char - 26);
        });
        setText(newText);
        props.showAlert("🔐 ROT13 Applied!", "success")
    }

    // ============ TEXT FORMATTING FOR CODE/PLATFORMS ============
    const handleSlugify = () => {
        const newText = text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
        setText(newText);
        props.showAlert("🔗 Slugified!", "success")
    }

    const handleCamelCase = () => {
        const newText = text
            .toLowerCase()
            .trim()
            .split(/\s+/)
            .map((word, index) => 
                index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join('');
        setText(newText);
        props.showAlert("🐪 CamelCase Applied!", "success")
    }

    const handleSnakeCase = () => {
        const newText = text
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '_')
            .replace(/[^\w_]/g, '');
        setText(newText);
        props.showAlert("🐍 snake_case Applied!", "success")
    }

    const handleKebabCase = () => {
        const newText = text
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '');
        setText(newText);
        props.showAlert("🌶️ kebab-case Applied!", "success")
    }

    const handleJSONPrettyPrint = () => {
        try {
            const parsed = JSON.parse(text);
            const newText = JSON.stringify(parsed, null, 2);
            setText(newText);
            props.showAlert("📄 JSON Prettified!", "success")
        } catch (e) {
            props.showAlert("❌ Invalid JSON!", "danger")
        }
    }

    const handleJSONMinify = () => {
        try {
            const parsed = JSON.parse(text);
            const newText = JSON.stringify(parsed);
            setText(newText);
            props.showAlert("📄 JSON Minified!", "success")
        } catch (e) {
            props.showAlert("❌ Invalid JSON!", "danger")
        }
    }

    // ============ AESTHETIC & FUN TRANSFORMATIONS ============
    const handleZalgoText = () => {
        const zalgo = ['̵', '̶', '̷', '̸', '̡', '̢', '̧', '̨', '̰', '̱', '̲', '̳', '̴', '̵', '̶', '̷', '̸', '̹', '̺', '̻', '̼', '̽', '̾', '̿'];
        const newText = text.split('').map(char => 
            char + zalgo[Math.floor(Math.random() * zalgo.length)]
        ).join('');
        setText(newText);
        props.showAlert("👻 Zalgo Text Applied!", "success")
    }

    const handleBoldText = () => {
        const boldMap = {
            'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣',
            'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭',
            'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
            'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉',
            'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓',
            'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
            '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
        };
        const newText = text.split('').map(char => boldMap[char] || char).join('');
        setText(newText);
        props.showAlert("𝐁𝐨𝐥𝐝 Text Applied!", "success")
    }

    const handleItalicText = () => {
        const italicMap = {
            'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫',
            'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵',
            'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻',
            'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑',
            'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛',
            'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡'
        };
        const newText = text.split('').map(char => italicMap[char] || char).join('');
        setText(newText);
        props.showAlert("𝘐𝘵𝘢𝘭𝘪𝘤 Text Applied!", "success")
    }

    const handleMonospaceText = () => {
        const monoMap = {
            'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓',
            'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝',
            'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
            'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹',
            'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃',
            'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
            '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿'
        };
        const newText = text.split('').map(char => monoMap[char] || char).join('');
        setText(newText);
        props.showAlert("𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 Applied!", "success")
    }

    // ============ UTILITY FUNCTIONS ============
    const handleClearClick = () => {
        setText('');
        props.showAlert("🗑️ Text Area Cleared!", "success")
    }

    const handleCopy = () => {
        if (text.length > 0) {
            navigator.clipboard.writeText(text);
            setCopied(true);
            props.showAlert("📋 Text Copied to Clipboard!", "success")
            setTimeout(() => setCopied(false), 2000);
        }
    }

    const handleDownloadClick = () => {
        const element = document.createElement('a');
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'text-content.txt';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        props.showAlert("📥 Text Downloaded!", "success")
    }

    // ============ TEXT STATISTICS ============
    const words = text.split(/\s+/).filter(word => word.length > 0).length;
    const chars = text.length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
    const readingTime = (0.008 * words).toFixed(2);
    const lines = text.length === 0 ? 0 : text.split('\n').length;

    return (
        <div className={`textform-container ${isDark ? 'dark-mode' : 'light-mode'}`}>
            {/* Text Input Section */}
            <div className="input-section">
                <h1 className="heading-main">{props.heading}</h1>
                <div className="textarea-wrapper">
                    <textarea 
                        className="form-control textarea-input"
                        value={text} 
                        id="textChange" 
                        rows="10"
                        placeholder="Enter your text here and start transforming it..."
                        onChange={e => setText(e.target.value)}
                    ></textarea>
                    <div className={`char-count ${isDark ? 'dark' : 'light'}`}>
                        {text.length} / Unlimited
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="stats-section">
                <h2 className="stats-title">📊 Quick Stats</h2>
                <div className="stats-grid">
                    <div className={`stat-card ${isDark ? 'dark' : 'light'}`}>
                        <div className="stat-icon">📝</div>
                        <div className="stat-label">Words</div>
                        <div className="stat-value">{words}</div>
                    </div>
                    <div className={`stat-card ${isDark ? 'dark' : 'light'}`}>
                        <div className="stat-icon">🔤</div>
                        <div className="stat-label">Characters</div>
                        <div className="stat-value">{chars}</div>
                    </div>
                    {lines > 0 && (
                        <div className={`stat-card ${isDark ? 'dark' : 'light'}`}>
                            <div className="stat-icon">📄</div>
                            <div className="stat-label">Lines</div>
                            <div className="stat-value">{lines}</div>
                        </div>
                    )}
                    <div className={`stat-card ${isDark ? 'dark' : 'light'}`}>
                        <div className="stat-icon">⏱️</div>
                        <div className="stat-label">Read Time</div>
                        <div className="stat-value">{readingTime} min</div>
                    </div>
                    <div className={`stat-card ${isDark ? 'dark' : 'light'}`}>
                        <div className="stat-icon">📋</div>
                        <div className="stat-label">Sentences</div>
                        <div className="stat-value">{sentences}</div>
                    </div>
                    <div className={`stat-card ${isDark ? 'dark' : 'light'}`}>
                        <div className="stat-icon">¶</div>
                        <div className="stat-label">Paragraphs</div>
                        <div className="stat-value">{paragraphs}</div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="tabs-container">
                <div className="tabs-header">
                    <button 
                        className={`tab-btn ${activeTab === 'case' ? 'active' : ''}`}
                        onClick={() => setActiveTab('case')}
                    >
                        🔤 Case
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'arrange' ? 'active' : ''}`}
                        onClick={() => setActiveTab('arrange')}
                    >
                        🔄 Arrange
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'format' ? 'active' : ''}`}
                        onClick={() => setActiveTab('format')}
                    >
                        ✂️ Format
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'encode' ? 'active' : ''}`}
                        onClick={() => setActiveTab('encode')}
                    >
                        🔐 Encode
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                        onClick={() => setActiveTab('code')}
                    >
                        💻 Code
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'style' ? 'active' : ''}`}
                        onClick={() => setActiveTab('style')}
                    >
                        🎨 Style
                    </button>
                </div>

                {/* Case Operations */}
                {activeTab === 'case' && (
                    <div className="button-groups">
                        <div className="button-group">
                            <h3 className="group-title">📝 Case Conversions</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-primary" onClick={handleUpClick}><span className="icon">Aa</span><span>UPPER</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-primary" onClick={handleLowClick}><span className="icon">aa</span><span>lower</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-primary" onClick={handleCapitalizeClick}><span className="icon">Ab</span><span>Title</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-primary" onClick={handleCapitalizeSentence}><span className="icon">Ab</span><span>Sentence</span></button>
                            </div>
                        </div>
                        <div className="button-group">
                            <h3 className="group-title">🎲 Case Manipulation</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-primary" onClick={handleInvertClick}><span className="icon">aA</span><span>Invert</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-primary" onClick={handleRandomCase}><span className="icon">🎲</span><span>Random</span></button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Arrange Operations */}
                {activeTab === 'arrange' && (
                    <div className="button-groups">
                        <div className="button-group">
                            <h3 className="group-title">🔄 Reversal</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-info" onClick={handleReverseClick}><span className="icon">⟲</span><span>Reverse</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-info" onClick={handleReverseWords}><span className="icon">⟲</span><span>Words</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-info" onClick={handleReverseLines}><span className="icon">⟲</span><span>Lines</span></button>
                            </div>
                        </div>
                        <div className="button-group">
                            <h3 className="group-title">📊 Sorting</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-info" onClick={handleSortLinesAsc}><span className="icon">↑</span><span>Lines A-Z</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-info" onClick={handleSortLinesDesc}><span className="icon">↓</span><span>Lines Z-A</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-info" onClick={handleSortWords}><span className="icon">↑</span><span>Words</span></button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Format Operations */}
                {activeTab === 'format' && (
                    <div className="button-groups">
                        <div className="button-group">
                            <h3 className="group-title">✂️ Whitespace</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-warning" onClick={handleTrimSpaces}><span className="icon">→</span><span>Trim</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-warning" onClick={handleExtraSpaces}><span className="icon">→</span><span>Remove Extra</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-warning" onClick={handleRemoveBlankLines}><span className="icon">×</span><span>Blank Lines</span></button>
                            </div>
                        </div>
                        <div className="button-group">
                            <h3 className="group-title">📝 Text Cleaning</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-warning" onClick={handleRemovePunctuation}><span className="icon">✂️</span><span>Punctuation</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-warning" onClick={handleRemoveDigits}><span className="icon">🔢</span><span>Digits</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-warning" onClick={handleKeepLettersOnly}><span className="icon">🔤</span><span>Letters</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-warning" onClick={handleKeepNumbersOnly}><span className="icon">🔢</span><span>Numbers</span></button>
                            </div>
                        </div>
                        <div className="button-group">
                            <h3 className="group-title">🔧 Indentation</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-warning" onClick={handleIndentText}><span className="icon">→</span><span>Indent</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-warning" onClick={handleUnindentText}><span className="icon">←</span><span>Unindent</span></button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Encoding Operations */}
                {activeTab === 'encode' && (
                    <div className="button-groups">
                        <div className="button-group">
                            <h3 className="group-title">🔐 Base64</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-secondary" onClick={handleBase64Encode}><span className="icon">🔒</span><span>Encode</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-secondary" onClick={handleBase64Decode}><span className="icon">🔓</span><span>Decode</span></button>
                            </div>
                        </div>
                        <div className="button-group">
                            <h3 className="group-title">🔗 URL / HTML</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-secondary" onClick={handleURLEncode}><span className="icon">🔗</span><span>URL Enc</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-secondary" onClick={handleURLDecode}><span className="icon">🔗</span><span>URL Dec</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-secondary" onClick={handleHTMLEncode}><span className="icon">📄</span><span>HTML Enc</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-secondary" onClick={handleHTMLDecode}><span className="icon">📄</span><span>HTML Dec</span></button>
                            </div>
                        </div>
                        <div className="button-group">
                            <h3 className="group-title">🔐 Cipher</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-secondary" onClick={handleROT13}><span className="icon">🔀</span><span>ROT13</span></button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Code Format Operations */}
                {activeTab === 'code' && (
                    <div className="button-groups">
                        <div className="button-group">
                            <h3 className="group-title">💻 Case Styles</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-danger" onClick={handleSlugify}><span className="icon">🔗</span><span>Slug</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-danger" onClick={handleCamelCase}><span className="icon">🐪</span><span>camelCase</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-danger" onClick={handleSnakeCase}><span className="icon">🐍</span><span>snake_case</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-danger" onClick={handleKebabCase}><span className="icon">🌶️</span><span>kebab-case</span></button>
                            </div>
                        </div>
                        <div className="button-group">
                            <h3 className="group-title">📋 JSON</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-danger" onClick={handleJSONPrettyPrint}><span className="icon">✨</span><span>Pretty</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-danger" onClick={handleJSONMinify}><span className="icon">📦</span><span>Minify</span></button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Style Operations */}
                {activeTab === 'style' && (
                    <div className="button-groups">
                        <div className="button-group">
                            <h3 className="group-title">🎨 Unicode Fonts</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-danger" onClick={handleBoldText}><span className="icon">𝐁</span><span>Bold</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-danger" onClick={handleItalicText}><span className="icon">𝘐</span><span>Italic</span></button>
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-danger" onClick={handleMonospaceText}><span className="icon">𝚖</span><span>Monospace</span></button>
                            </div>
                        </div>
                        <div className="button-group">
                            <h3 className="group-title">👻 Fun Effects</h3>
                            <div className="button-row">
                                <button type="button" disabled={text.length === 0} className="btn btn-modern btn-danger" onClick={handleZalgoText}><span className="icon">😵</span><span>Zalgo</span></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Quick Action Buttons */}
            <div className="quick-actions">
                <button 
                    type="button" 
                    disabled={text.length === 0} 
                    className="btn btn-modern btn-success"
                    onClick={handleCopy}
                >
                    <span className="icon">📋</span>
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
                <button 
                    type="button" 
                    disabled={text.length === 0} 
                    className="btn btn-modern btn-secondary"
                    onClick={handleDownloadClick}
                >
                    <span className="icon">📥</span>
                    <span>Download</span>
                </button>
                <button 
                    type="button" 
                    disabled={text.length === 0} 
                    className="btn btn-modern btn-danger"
                    onClick={handleClearClick}
                >
                    <span className="icon">🗑️</span>
                    <span>Clear</span>
                </button>
            </div>

            {/* Preview Section */}
            <div className="preview-section">
                <h2 className="preview-title">👁️ Live Preview</h2>
                <div className={`preview-box ${isDark ? 'dark' : 'light'}`}>
                    {text && text.length > 0 ? (
                        <p className="preview-text">{text}</p>
                    ) : (
                        <p className="preview-empty">Start typing to see your text preview here...</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TextForm;
