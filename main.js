function shortCodeIfy(_0xb767x3, _0xb767x4, _0xb767x5) {
    for (var _0xb767x6 = _0xb767x3.split('$'), _0xb767x7 = /[^{\}]+(?=})/g, _0xb767x8 = 0; _0xb767x8 < _0xb767x6.length; _0xb767x8++) {
        var _0xb767x9 = _0xb767x6[_0xb767x8].split('=');
        if (_0xb767x9[0].trim() == _0xb767x4) {
            return null != (_0xb767x5 = _0xb767x9[1]).match(_0xb767x7) && String(_0xb767x5.match(_0xb767x7)).trim()
        }
    };
    return !1
}

function msgError() {
    return '<span class="error-msg"><b>Error:</b>&nbsp;No Results Found</span>'
}

function beforeLoader() {
    return '<div class="loader"></div>'
}

function getFeedUrl(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6) {
    switch (_0xb767x5) {
    case 'recent':
        _0xb767x6 = '/feeds/posts/default?alt=json&max-results=' + _0xb767x4;
        break;
    case 'comments':
        _0xb767x6 = 'list1' == _0xb767x3 ? '/feeds/comments/default?alt=json&max-results=' + _0xb767x4 : '/feeds/posts/default/-/' + _0xb767x5 + '?alt=json&max-results=' + _0xb767x4;
        break;
    default:
        _0xb767x6 = '/feeds/posts/default/-/' + _0xb767x5 + '?alt=json&max-results=' + _0xb767x4
    };
    return _0xb767x6
}

function getPostLink(_0xb767x3, _0xb767x4) {
    for (var _0xb767x5 = 0; _0xb767x5 < _0xb767x3[_0xb767x4].link.length; _0xb767x5++) {
        if ('alternate' == _0xb767x3[_0xb767x4].link[_0xb767x5].rel) {
            var _0xb767x6 = _0xb767x3[_0xb767x4].link[_0xb767x5].href;
            break
        }
    };
    return _0xb767x6
}

function getPostTitle(_0xb767x3, _0xb767x4, _0xb767x5) {
    return _0xb767x3[_0xb767x4].title.$t ? _0xb767x3[_0xb767x4].title.$t : exportify.noTitle
}

function getPostTag(_0xb767x3, _0xb767x4, _0xb767x5) {
    return _0xb767x3[_0xb767x4].category && 1 == exportify.postLabels ? '<span class="entry-tag">' + _0xb767x3[_0xb767x4].category[0].term + '</span>' : ''
}

function getPostDate(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6, _0xb767x7) {
    var _0xb767x8 = _0xb767x3[_0xb767x4].published.$t,
        _0xb767x9 = _0xb767x8.substring(0, 4),
        _0xb767x11 = _0xb767x8.substring(5, 7),
        _0xb767x12 = _0xb767x8.substring(8, 10);
    const _0xb767x13 = dateFormat.replace('{m}', monthNames[parseInt(_0xb767x11, 10) - 1]).replace('{d}', _0xb767x12).replace('{y}', _0xb767x9);
    return _0xb767x7 = '' != _0xb767x5 && 1 == exportify.postLabels ? '<span class="on sp">-</span>' : '', 1 == exportify.postDate ? '<span class="entry-time">' + _0xb767x7 + '<time class="published" datetime="' + _0xb767x8 + '">' + _0xb767x13 + '</time></span>' : ''
}

function getPostMeta(_0xb767x3, _0xb767x4, _0xb767x5) {
    return 1 == exportify.postLabels || 1 == exportify.postDate ? '<div class="entry-meta mi">' + _0xb767x4 + _0xb767x3 + '</div>' : ''
}

function getFirstImage(_0xb767x3, _0xb767x4) {
    var _0xb767x5 = $('<div>').html(_0xb767x3).find('img:first').attr('src'),
        _0xb767x6 = _0xb767x5.lastIndexOf('/') || 0,
        _0xb767x7 = _0xb767x5.lastIndexOf('/', _0xb767x6 - 1) || 0,
        _0xb767x8 = _0xb767x5.substring(0, _0xb767x7),
        _0xb767x9 = _0xb767x5.substring(_0xb767x7, _0xb767x6),
        _0xb767x11 = _0xb767x5.substring(_0xb767x6);
    return (_0xb767x9.match(/\/s[0-9]+/g) || _0xb767x9.match(/\/w[0-9]+/g) || '/d' == _0xb767x9) && (_0xb767x9 = '/w72-h72-p-k-no-nu'), _0xb767x8 + _0xb767x9 + _0xb767x11
}

function getPostImage(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6) {
    var _0xb767x7 = _0xb767x3[_0xb767x4].content.$t;
    return _0xb767x5 = _0xb767x3[_0xb767x4].media$thumbnail ? _0xb767x3[_0xb767x4].media$thumbnail.url : 'https://resources.blogblog.com/img/blank.gif', _0xb767x7.indexOf(_0xb767x7.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? _0xb767x7.indexOf('<img') > -1 ? _0xb767x7.indexOf(_0xb767x7.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < _0xb767x7.indexOf('<img') ? _0xb767x5.replace('img.youtube.com', 'i.ytimg.com').replace('/default.', '/maxresdefault.') : getFirstImage(_0xb767x7) : _0xb767x5.replace('img.youtube.com', 'i.ytimg.com').replace('/default.', '/maxresdefault.') : _0xb767x7.indexOf('<img') > -1 ? getFirstImage(_0xb767x7) : 'https://resources.blogblog.com/img/blank.gif'
}

function getPostImageType(_0xb767x3, _0xb767x4) {
    return _0xb767x3.match('i.ytimg.com') ? 'is-video' : 'is-image'
}

function getPostComments(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6) {
    var _0xb767x7 = _0xb767x3[_0xb767x4].author[0].name.$t,
        _0xb767x8 = _0xb767x3[_0xb767x4].author[0].gd$image.src.replace('/s113', '/s72-c').replace('/s220', '/s72-c'),
        _0xb767x9 = _0xb767x3[_0xb767x4].title.$t;
    return (_0xb767x8.match('//img1.blogblog.com/img/blank.gif') || _0xb767x8.match('//img1.blogblog.com/img/b16-rounded.gif')) && (_0xb767x8 = '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu/avatar.jpg'), '<div class="cmm1-item item-' + _0xb767x4 + '"><a class="entry-inner wrap-all-link" href="' + _0xb767x5 + '" title="' + _0xb767x7 + '"><span class="entry-image-wrap cmm-avatar"><span class="entry-thumb" data-image="' + _0xb767x8 + '"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">' + _0xb767x7 + '</h2><p class="cmm-snippet excerpt">' + _0xb767x9 + '</p></div></a></div>'
}

function getAjax(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6) {
    switch (_0xb767x4) {
    case 'msimple':
        ;
    case 'trending':
        ;
    case 'list1':
        ;
    case 'related':
        0 == _0xb767x6 && (_0xb767x6 = 'geterror404');
        var _0xb767x7 = getFeedUrl(_0xb767x4, _0xb767x5, _0xb767x6);
        $.ajax({
            url: _0xb767x7,
            type: 'GET',
            dataType: 'json',
            cache: !0,
            beforeSend: function (_0xb767x5) {
                switch (_0xb767x4) {
                case 'trending':
                    ;
                case 'list1':
                    _0xb767x3.html(beforeLoader());
                    break;
                case 'related':
                    _0xb767x3.html(beforeLoader()).parent().addClass('show-ify')
                }
            },
            success: function (_0xb767x5) {
                var _0xb767x7 = '';
                switch (_0xb767x4) {
                case 'msimple':
                    _0xb767x7 = '<div class="ul mega-items">';
                    break;
                case 'trending':
                    _0xb767x7 = '<div class="trending-items">';
                    break;
                case 'list1':
                    _0xb767x7 = 'comments' != _0xb767x6 ? '<div class="list1-items sidebar-posts">' : '<div class="cmm1-items">';
                    break;
                case 'related':
                    _0xb767x7 = '<div class="related-posts">'
                };
                var _0xb767x8 = _0xb767x5.feed.entry;
                if (null != _0xb767x8) {
                    for (var _0xb767x9 = 0, _0xb767x11 = _0xb767x8; _0xb767x9 < _0xb767x11.length; _0xb767x9++) {
                        var _0xb767x12 = getPostLink(_0xb767x11, _0xb767x9),
                            _0xb767x13 = getPostTitle(_0xb767x11, _0xb767x9),
                            _0xb767x1a = getPostTag(_0xb767x11, _0xb767x9),
                            _0xb767x1b = getPostDate(_0xb767x11, _0xb767x9, _0xb767x1a),
                            _0xb767x1c = getPostImage(_0xb767x11, _0xb767x9),
                            _0xb767x1d = getPostImageType(_0xb767x1c, _0xb767x9),
                            _0xb767x1e = getPostMeta(_0xb767x1b, _0xb767x1a),
                            _0xb767x1f = '';
                        switch (_0xb767x4) {
                        case 'msimple':
                            _0xb767x1f += '<div class="mega-item post"><div class="mega-content"><a title="' + _0xb767x13 + '" class="entry-image-wrap ' + _0xb767x1d + '" href="' + _0xb767x12 + '"><span class="entry-thumb" data-image="' + _0xb767x1c + '"></span></a><h2 class="entry-title"><a href="' + _0xb767x12 + '" title="' + _0xb767x13 + '">' + _0xb767x13 + '</a></h2></div></div>';
                            break;
                        case 'trending':
                            switch (_0xb767x9) {
                            case 0:
                                _0xb767x1f += '<div class="trending-left"><div class="trending-item item-' + _0xb767x9 + '"><a title="' + _0xb767x13 + '" class="entry-image-wrap ' + _0xb767x1d + '" href="' + _0xb767x12 + '"><span class="entry-thumb" data-image="' + _0xb767x1c + '"></span></a><div class="entry-header">' + _0xb767x1e + '<h2 class="entry-title"><a title="' + _0xb767x13 + '" href="' + _0xb767x12 + '">' + _0xb767x13 + '</a></h2></div></div></div><div class="trending-right">';
                                break;
                            default:
                                _0xb767x1f += '<div class="trending-item item-' + _0xb767x9 + '"><div class="entry-header">' + _0xb767x1e + '<h2 class="entry-title"><a title="' + _0xb767x13 + '" href="' + _0xb767x12 + '">' + _0xb767x13 + '</a></h2></div></div>'
                            };
                            break;
                        case 'list1':
                            switch (_0xb767x6) {
                            case 'comments':
                                _0xb767x1f += getPostComments(_0xb767x11, _0xb767x9, _0xb767x12);
                                break;
                            default:
                                switch (_0xb767x9) {
                                case 0:
                                    _0xb767x1f += '<div class="list1-item post item-' + _0xb767x9 + '"><a title="' + _0xb767x13 + '" class="entry-image-wrap ' + _0xb767x1d + '" href="' + _0xb767x12 + '"><span class="entry-thumb" data-image="' + _0xb767x1c + '"/></a><div class="entry-header">' + _0xb767x1e + '<h2 class="entry-title"><a href="' + _0xb767x12 + '" title="' + _0xb767x13 + '">' + _0xb767x13 + '</a></h2></div></div>';
                                    break;
                                default:
                                    _0xb767x1f += '<div class="list1-item post item-' + _0xb767x9 + '"><a title="' + _0xb767x13 + '" class="entry-image-wrap ' + _0xb767x1d + '" href="' + _0xb767x12 + '"><span class="entry-thumb" data-image="' + _0xb767x1c + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + _0xb767x12 + '" title="' + _0xb767x13 + '">' + _0xb767x13 + '</a></h2></div></div>'
                                }
                            };
                            break;
                        case 'related':
                            _0xb767x1f += '<div class="related-item post item-' + _0xb767x9 + '"><a title="' + _0xb767x13 + '" class="entry-image-wrap ' + _0xb767x1d + '" href="' + _0xb767x12 + '"><span class="entry-thumb" data-image="' + _0xb767x1c + '"></span></a><div class="entry-header">' + _0xb767x1e + '<h2 class="entry-title"><a href="' + _0xb767x12 + '" title="' + _0xb767x13 + '">' + _0xb767x13 + '</a></h2></div></div>'
                        };
                        _0xb767x7 += _0xb767x1f
                    }
                } else {
                    switch (_0xb767x4) {
                    case 'msimple':
                        _0xb767x7 = '<div class="ul mega-items no-items">' + msgError() + '</div>';
                        break;
                    default:
                        _0xb767x7 = msgError()
                    }
                };
                switch (_0xb767x4) {
                case 'msimple':
                    _0xb767x7 += '</div>', _0xb767x3.append(_0xb767x7).addClass('msimple'), _0xb767x3.find('a:first').attr('href', function (_0xb767x3, _0xb767x4) {
                        switch (_0xb767x6) {
                        case 'recent':
                            _0xb767x4 = _0xb767x4.replace(_0xb767x4, '/search');
                            break;
                        default:
                            _0xb767x4 = _0xb767x4.replace(_0xb767x4, '/search/label/' + _0xb767x6)
                        };
                        return _0xb767x4
                    });
                    break;
                default:
                    _0xb767x7 += '</div>', _0xb767x3.html(_0xb767x7)
                };
                _0xb767x3.find('span.entry-thumb').lazyify()
            },
            error: function () {
                switch (_0xb767x4) {
                case 'msimple':
                    _0xb767x3.append('<div class="ul mega-items no-items">' + msgError() + '</div>');
                    break;
                default:
                    _0xb767x3.html(msgError())
                }
            }
        })
    }
}

function ajaxMega(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6, _0xb767x7) {
    if (_0xb767x7.match('getmega')) {
        if ('msimple' == _0xb767x4) {
            return getAjax(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6)
        };
        _0xb767x3.append('<div class="ul mega-items no-items">' + msgError() + '</div>')
    }
}

function ajaxTrending(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6, _0xb767x7) {
    if (_0xb767x7.match('gettrending')) {
        if ('trending' == _0xb767x4) {
            return getAjax(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6)
        };
        _0xb767x3.html(msgError()).parent().addClass('show-ify')
    }
}

function ajaxWidget(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6, _0xb767x7) {
    if (_0xb767x7.match('getwidget')) {
        if ('list1' == _0xb767x4) {
            return getAjax(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6)
        };
        _0xb767x3.html(msgError())
    }
}

function ajaxRelated(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6, _0xb767x7) {
    if (_0xb767x7.match('getrelated')) {
        return getAjax(_0xb767x3, _0xb767x4, _0xb767x5, _0xb767x6)
    }
}

function disqusComments(_0xb767x3) {
    var _0xb767x4 = document.createElement('script');
    _0xb767x4.type = 'text/javascript', _0xb767x4.async = !0, _0xb767x4.src = '//' + _0xb767x3 + '.disqus.com/blogger_item.js', (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(_0xb767x4)
}

function beautiAvatar(_0xb767x3) {
    $(_0xb767x3).attr('src', function (_0xb767x3, _0xb767x4) {
        return _0xb767x4 = (_0xb767x4 = (_0xb767x4 = _0xb767x4.replace('//resources.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg')).replace('//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg')).replace('/s35', '/s39')
    })
}
$('#colorify-proBy-LimonSeo-main-nav').menuify(), $('#colorify-proBy-LimonSeo-main-nav .widget').addClass('show-menu'), $('.show-search').on('click', function () {
    $('body').addClass('search-active'), $('#main-search-wrap').fadeIn(170).find('input').focus()
}), $('.hide-search').on('click', function () {
    $('body').removeClass('search-active'), $('#main-search-wrap').fadeOut(170).find('input').val('').blur()
}), $('html').each(function () {
    var _0xb767x3 = $(this);
    1 != darkMode && 0 != userDarkMode && ('dark' == localStorage.themeColor && _0xb767x3.addClass('is-dark'), $('.darkmode-toggle').on('click', function () {
        'dark' != localStorage.themeColor ? (_0xb767x3.addClass('is-dark'), localStorage.themeColor = 'dark') : (_0xb767x3.removeClass('is-dark'), localStorage.themeColor = 'light')
    }))
}), $('.sidebar .social-icons li a').each(function () {
    var _0xb767x3 = $(this),
        _0xb767x4 = _0xb767x3.attr('href').trim().split('#');
    null != _0xb767x4[1] && _0xb767x3.append('<span class="text">' + _0xb767x4[1] + '</span>'), _0xb767x3.attr('href', _0xb767x4[0])
}), $('.FollowByEmail .widget-content').each(function (_0xb767x3, _0xb767x4) {
    var _0xb767x5 = $(this),
        _0xb767x6 = _0xb767x5.data('shortcode');
    null != _0xb767x6 && (_0xb767x3 = shortCodeIfy(_0xb767x6, 'title'), _0xb767x4 = shortCodeIfy(_0xb767x6, 'text'), 0 != _0xb767x3 && _0xb767x5.find('.follow-by-email-title').text(_0xb767x3), 0 != _0xb767x4 && _0xb767x5.find('.follow-by-email-text').text(_0xb767x4))
}), $('.post-body a').each(function () {
    var _0xb767x3 = $(this),
        _0xb767x4 = _0xb767x3.html(),
        _0xb767x5 = _0xb767x4.toLowerCase(),
        _0xb767x6 = shortCodeIfy(_0xb767x4, 'text'),
        _0xb767x7 = shortCodeIfy(_0xb767x4, 'icon'),
        _0xb767x8 = shortCodeIfy(_0xb767x4, 'color');
    _0xb767x5.match('getbutton') && 0 != _0xb767x6 && (_0xb767x3.addClass('button btn').text(_0xb767x6), 0 != _0xb767x7 && _0xb767x3.addClass(_0xb767x7), 0 != _0xb767x8 && _0xb767x3.addClass('colored-button').attr('style', 'background-color:' + _0xb767x8 + ';'))
}), $('.post-body b').each(function () {
    var _0xb767x3 = $(this),
        _0xb767x4 = _0xb767x3.text(),
        _0xb767x5 = _0xb767x4.toLowerCase().trim();
    _0xb767x5.match(/(?:\$ads\=\{1\})/g) && _0xb767x3.replaceWith('<div id="colorify-proBy-LimonSeo-new-before-ad"/>'), _0xb767x5.match(/(?:\$ads\=\{2\})/g) && _0xb767x3.replaceWith('<div id="colorify-proBy-LimonSeo-new-after-ad"/>'), _0xb767x5.match('{tocify}') && (_0xb767x4 = 0 != shortCodeIfy(_0xb767x4, 'title') ? shortCodeIfy(_0xb767x4, 'title') : 'Table of Contents', _0xb767x3.replaceWith('<div class="tocify-wrap"><div class="tocify-inner"><a href="javascript:;" class="tocify-title" role="button" title="' + _0xb767x4 + '"><span class="tocify-title-text">' + _0xb767x4 + '</span></a><ol id="tocify"></ol></div></div>'), $('.tocify-title').each(function (_0xb767x3) {
        (_0xb767x3 = $(this)).on('click', function () {
            _0xb767x3.toggleClass('is-expanded'), $('#tocify').slideToggle(170)
        })
    }), $('#tocify').toc({
        content: '#post-body',
        headings: 'h2,h3,h4'
    }), $('#tocify li a').each(function (_0xb767x3) {
        (_0xb767x3 = $(this)).click(function () {
            return $('html,body').animate({
                scrollTop: $(_0xb767x3.attr('href')).offset().top - 20
            }, 500), !1
        })
    })), _0xb767x5.match('{contactform}') && (_0xb767x3.replaceWith('<div class="contact-form"/>'), $('.contact-form').append($('#ContactForm1'))), _0xb767x5.match('{leftsidebar}') && _0xb767x3.replaceWith('<style>.is-single #content-wrapper > .container{flex-direction:row-reverse}.rtl .is-single #content-wrapper > .container{flex-direction:row}</style>'), _0xb767x5.match('{rightsidebar}') && _0xb767x3.replaceWith('<style>.is-single #content-wrapper > .container{flex-direction:row}.rtl .is-single #content-wrapper > .container{flex-direction:row-reverse}</style>'), _0xb767x5.match('{fullwidth}') && _0xb767x3.replaceWith('<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>')
}), $('#colorify-proBy-LimonSeo-new-before-ad').each(function () {
    var _0xb767x3 = $(this);
    _0xb767x3.length && $('#before-ad').appendTo(_0xb767x3)
}), $('#colorify-proBy-LimonSeo-new-after-ad').each(function () {
    var _0xb767x3 = $(this);
    _0xb767x3.length && $('#after-ad').appendTo(_0xb767x3)
}), $('#colorify-proBy-LimonSeo-main-before-ad .widget').each(function () {
    var _0xb767x3 = $(this);
    _0xb767x3.length && _0xb767x3.appendTo($('#before-ad'))
}), $('#colorify-proBy-LimonSeo-main-after-ad .widget').each(function () {
    var _0xb767x3 = $(this);
    _0xb767x3.length && _0xb767x3.appendTo($('#after-ad'))
}), $('#colorify-proBy-LimonSeo-post-footer-ads .widget').each(function () {
    var _0xb767x3 = $(this);
    _0xb767x3.length && _0xb767x3.appendTo($('#post-footer-ads'))
}), $('.post-body blockquote').each(function () {
    var _0xb767x3 = $(this),
        _0xb767x4 = _0xb767x3.text().toLowerCase().trim(),
        _0xb767x5 = _0xb767x3.html();
    if (_0xb767x4.match('{alertsuccess}')) {
        const _0xb767x4 = _0xb767x5.replace('{alertSuccess}', '');
        _0xb767x3.replaceWith('<div class="alert-message alert-success">' + _0xb767x4 + '</div>')
    };
    if (_0xb767x4.match('{alertinfo}')) {
        const _0xb767x4 = _0xb767x5.replace('{alertInfo}', '');
        _0xb767x3.replaceWith('<div class="alert-message alert-info">' + _0xb767x4 + '</div>')
    };
    if (_0xb767x4.match('{alertwarning}')) {
        const _0xb767x4 = _0xb767x5.replace('{alertWarning}', '');
        _0xb767x3.replaceWith('<div class="alert-message alert-warning">' + _0xb767x4 + '</div>')
    };
    if (_0xb767x4.match('{alerterror}')) {
        const _0xb767x4 = _0xb767x5.replace('{alertError}', '');
        _0xb767x3.replaceWith('<div class="alert-message alert-error">' + _0xb767x4 + '</div>')
    };
    if (_0xb767x4.match('{codebox}')) {
        const _0xb767x4 = _0xb767x5.replace('{codeBox}', '');
        _0xb767x3.replaceWith('<pre class="code-box">' + _0xb767x4 + '</pre>')
    }
}), $('.entry-share-links .window-ify,.colorify-proBy-LimonSeo-share-links .window-ify').on('click', function () {
    var _0xb767x3 = $(this),
        _0xb767x4 = _0xb767x3.data('url'),
        _0xb767x5 = _0xb767x3.data('width'),
        _0xb767x6 = _0xb767x3.data('height'),
        _0xb767x7 = window.screen.width,
        _0xb767x8 = window.screen.height,
        _0xb767x9 = Math.round(_0xb767x7 / 2 - _0xb767x5 / 2),
        _0xb767x11 = Math.round(_0xb767x8 / 2 - _0xb767x6 / 2);
    window.open(_0xb767x4, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + _0xb767x5 + ',height=' + _0xb767x6 + ',left=' + _0xb767x9 + ',top=' + _0xb767x11).focus()
}), $('.colorify-proBy-LimonSeo-share-links').each(function () {
    var _0xb767x3 = $(this);
    _0xb767x3.find('.show-hid a').on('click', function () {
        _0xb767x3.toggleClass('show-hidden')
    })
}), $('.about-author .author-text').each(function () {
    var _0xb767x3 = $(this),
        _0xb767x4 = _0xb767x3.find('a');
    _0xb767x4.each(function () {
        var _0xb767x3 = $(this),
            _0xb767x4 = _0xb767x3.text().trim(),
            _0xb767x5 = _0xb767x3.attr('href');
        _0xb767x3.replaceWith('<li class="' + _0xb767x4 + '"><a href="' + _0xb767x5 + '" title="' + _0xb767x4 + '" rel="noopener noreferrer" target="_blank"/></li>')
    }), _0xb767x4.length && _0xb767x3.parent().append('<ul class="author-links social social-color"></ul>'), _0xb767x3.find('li').appendTo('.author-links')
}), $('#colorify-proBy-LimonSeo-main-nav-menu li.mega-menu').each(function (_0xb767x3, _0xb767x4) {
    var _0xb767x5 = $(this),
        _0xb767x6 = _0xb767x5.find('a').data('shortcode');
    null != _0xb767x6 && (_0xb767x3 = _0xb767x6.toLowerCase(), ajaxMega(_0xb767x5, 'msimple', 5, shortCodeIfy(_0xb767x6, 'label'), _0xb767x3))
}), $('#trending .HTML .widget-content').each(function (_0xb767x3) {
    var _0xb767x4 = $(this),
        _0xb767x5 = $(window),
        _0xb767x6 = _0xb767x4.data('shortcode');
    null != _0xb767x6 && (mtc = _0xb767x6.toLowerCase(), _0xb767x3 = shortCodeIfy(_0xb767x6, 'label'), _0xb767x5.on('scroll', function _0xb767x6() {
        _0xb767x5.scrollTop() + _0xb767x5.height() >= _0xb767x4.offset().top && (_0xb767x5.off('scroll', _0xb767x6), ajaxTrending(_0xb767x4, 'trending', 5, _0xb767x3, mtc))
    }).trigger('scroll'))
}), $('.colorify-proBy-LimonSeo-widget-ready .HTML .widget-content').each(function (_0xb767x3, _0xb767x4, _0xb767x5) {
    var _0xb767x6 = $(this),
        _0xb767x7 = $(window),
        _0xb767x8 = _0xb767x6.data('shortcode');
    null != _0xb767x8 && (_0xb767x3 = _0xb767x8.toLowerCase(), _0xb767x4 = shortCodeIfy(_0xb767x8, 'results'), _0xb767x5 = shortCodeIfy(_0xb767x8, 'label'), _0xb767x7.on('scroll', function _0xb767x8() {
        _0xb767x7.scrollTop() + _0xb767x7.height() >= _0xb767x6.offset().top && (_0xb767x7.off('scroll', _0xb767x8), ajaxWidget(_0xb767x6, 'list1', _0xb767x4, _0xb767x5, _0xb767x3))
    }).trigger('scroll'))
}), $('#colorify-proBy-LimonSeo-related-posts .HTML').each(function (_0xb767x3, _0xb767x4) {
    var _0xb767x5 = $(this).data('shortcode');
    if (null != _0xb767x5) {
        function _0xb767x6() {
            return _0xb767x3 = shortCodeIfy(_0xb767x5, 'title'), _0xb767x4 = shortCodeIfy(_0xb767x5, 'results'), [_0xb767x3, _0xb767x4]
        }
        $('#related-wrap').each(function (_0xb767x3, _0xb767x4) {
            var _0xb767x5 = $(this),
                _0xb767x7 = $(window),
                _0xb767x8 = _0xb767x5.find('.colorify-proBy-LimonSeo-related-content'),
                _0xb767x9 = _0xb767x6();
            _0xb767x3 = 0 != _0xb767x9[1] ? _0xb767x9[1] : 4, 0 != _0xb767x9[0] && _0xb767x5.find('.related-title .title').text(_0xb767x9[0]), _0xb767x4 = _0xb767x5.find('.related-tag').data('label'), _0xb767x7.on('scroll', function _0xb767x5() {
                _0xb767x7.scrollTop() + _0xb767x7.height() >= _0xb767x8.offset().top && (_0xb767x7.off('scroll', _0xb767x5), ajaxRelated(_0xb767x8, 'related', _0xb767x3, _0xb767x4, 'getrelated'))
            }).trigger('scroll')
        })
    }
}), $('.colorify-proBy-LimonSeo-blog-post-comments').each(function () {
    1 != darkMode && 'dark' == localStorage.themeColor && (fbCommentsTheme = 'dark');
    var _0xb767x3 = $(this),
        _0xb767x4 = _0xb767x3.data('shortcode'),
        _0xb767x5 = shortCodeIfy(_0xb767x4, 'type'),
        _0xb767x6 = 'comments-system-' + _0xb767x5,
        _0xb767x7 = _0xb767x3.find('#top-continue .comment-reply');
    switch (_0xb767x5) {
    case 'disqus':
        var _0xb767x8 = shortCodeIfy(_0xb767x4, 'shortname');
        0 != _0xb767x8 && (disqus_shortname = _0xb767x8), disqusComments(disqus_shortname), _0xb767x3.addClass(_0xb767x6).show();
        break;
    case 'facebook':
        _0xb767x3.addClass(_0xb767x6).find('#comments').html('<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-colorscheme="' + fbCommentsTheme + '" data-numposts="5" data-lazy="true"></div>'), _0xb767x3.show();
        break;
    case 'hide':
        _0xb767x3.hide();
        break;
    default:
        _0xb767x3.addClass('comments-system-blogger').show(), $('.entry-meta .entry-comments-link').addClass('show'), _0xb767x7.addClass('btn'), beautiAvatar('.avatar-image-container img')
    };
    var _0xb767x9 = _0xb767x3.find('.comments .comment-reply'),
        _0xb767x11 = _0xb767x3.find('.comments #top-continue'),
        _0xb767x12 = _0xb767x3.find('#top-ce.comment-replybox-thread');
    _0xb767x9.on('click', function () {
        _0xb767x11.show(), _0xb767x12.hide()
    }), _0xb767x11.on('click', function () {
        _0xb767x11.hide(), _0xb767x12.show()
    })
}), $(function () {
    $('.entry-image-wrap .entry-thumb,.author-avatar-wrap .author-avatar,#footer-fbm .Image').lazyify(), $('#colorify-proBy-LimonSeo-mobile-menu').each(function () {
        var _0xb767x3 = $(this),
            _0xb767x4 = $('#colorify-proBy-LimonSeo-main-nav-menu').clone();
        _0xb767x4.attr('id', 'main-mobile-nav'), _0xb767x4.find('.mega-items').remove(), _0xb767x4.find('.mega-menu > a').each(function (_0xb767x3, _0xb767x4) {
            var _0xb767x5 = $(this),
                _0xb767x6 = _0xb767x5.data('shortcode');
            null != _0xb767x6 && (_0xb767x4 = 'recent' == (_0xb767x3 = shortCodeIfy(_0xb767x6.trim(), 'label')) ? '/search' : '/search/label/' + _0xb767x3, _0xb767x5.attr('href', _0xb767x4))
        }), _0xb767x4.appendTo(_0xb767x3), $('.mobile-menu-toggle, .hide-colorify-proBy-LimonSeo-mobile-menu, .overlay').on('click', function () {
            $('body').toggleClass('nav-active')
        }), $('.colorify-proBy-LimonSeo-mobile-menu .has-sub').append('<div class="submenu-toggle"/>'), $('.colorify-proBy-LimonSeo-mobile-menu .mega-menu').find('.submenu-toggle').remove(), $('.colorify-proBy-LimonSeo-mobile-menu ul li .submenu-toggle').on('click', function (_0xb767x3) {
            $(this).parent().hasClass('has-sub') && (_0xb767x3.preventDefault(), $(this).parent().hasClass('show') ? $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170) : $(this).parent().addClass('show').children('.m-sub').slideToggle(170))
        })
    }), $('.mm-footer .mm-social').each(function () {
        var _0xb767x3 = $(this),
            _0xb767x4 = $('#colorify-proBy-LimonSeo-about-section ul.social').clone();
        _0xb767x4.removeClass('social-bg-hover'), _0xb767x4.appendTo(_0xb767x3)
    }), $('.mm-footer .mm-menu').each(function () {
        var _0xb767x3 = $(this);
        $('#footer-menu ul.link-list').clone().appendTo(_0xb767x3)
    }), $('.header-inner').each(function () {
        var _0xb767x3 = $(this);
        if (1 == fixedMenu && _0xb767x3.length > 0) {
            var _0xb767x4 = $(document).scrollTop(),
                _0xb767x5 = _0xb767x3.offset().top,
                _0xb767x6 = _0xb767x3.height(),
                _0xb767x7 = _0xb767x5 + _0xb767x6 + _0xb767x6;
            $(window).scroll(function () {
                var _0xb767x6 = $(document).scrollTop();
                _0xb767x6 > _0xb767x7 ? _0xb767x3.addClass('is-fixed') : (_0xb767x6 < _0xb767x5 || _0xb767x6 <= 1) && _0xb767x3.removeClass('is-fixed'), _0xb767x6 > _0xb767x4 ? _0xb767x3.removeClass('show') : _0xb767x3.addClass('show'), _0xb767x4 = _0xb767x6
            })
        }
    }), $('.is-single #main-wrapper, .is-single #sidebar-wrapper').each(function (_0xb767x3) {
        1 == fixedSidebar && (_0xb767x3 = 1 == fixedSidebar ? 88 : 40, $(this).theiaStickySidebar({
            containerSelector: '#content-wrapper > .container',
            additionalMarginTop: _0xb767x3,
            additionalMarginBottom: 40
        }))
    }), $('#post-body iframe').each(function () {
        var _0xb767x3 = $(this);
        _0xb767x3.attr('src').match('www.youtube.com') && _0xb767x3.wrap('<div class="responsive-video-wrap"/>')
    }), $('p.comment-content').each(function () {
        var _0xb767x3 = $(this);
        _0xb767x3.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'), _0xb767x3.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    }), $('#colorify-proBy-LimonSeo-load-more-link').each(function () {
        var _0xb767x3 = $(this).data('load');
        _0xb767x3 && $('#colorify-proBy-LimonSeo-load-more-link').show(), $('#colorify-proBy-LimonSeo-load-more-link').on('click', function (_0xb767x4) {
            $('#colorify-proBy-LimonSeo-load-more-link').hide(), $.ajax({
                url: _0xb767x3,
                success: function (_0xb767x4) {
                    var _0xb767x5 = $(_0xb767x4).find('.blog-posts');
                    _0xb767x5.find('.index-post').addClass('post-animated post-fadeInUp'), $('.blog-posts').append(_0xb767x5.html()), (_0xb767x3 = $(_0xb767x4).find('#colorify-proBy-LimonSeo-load-more-link').data('load')) ? $('#colorify-proBy-LimonSeo-load-more-link').show() : ($('#colorify-proBy-LimonSeo-load-more-link').hide(), $('#blog-pager .no-more').addClass('show'))
                },
                beforeSend: function () {
                    $('#blog-pager .loading').show()
                },
                complete: function () {
                    $('#blog-pager .loading').hide(), $('.index-post .entry-image-wrap .entry-thumb').lazyify()
                }
            }), _0xb767x4.preventDefault()
        })
    }), $('#colorify-proBy-LimonSeo-cookie-ify').each(function () {
        var _0xb767x3 = $(this),
            _0xb767x4 = _0xb767x3.find('.widget.Text').data('shortcode');
        null != _0xb767x4 && (ok = shortCodeIfy(_0xb767x4, 'ok'), days = shortCodeIfy(_0xb767x4, 'days'), 0 != ok && _0xb767x3.find('#colorify-proBy-LimonSeo-cookie-ify-accept').text(ok), 0 != days ? days = Number(days) : days = 7), _0xb767x3.length > 0 && ('1' !== $.cookie('colorify_preview_cookie_ify_consent') && (_0xb767x3.css('display', 'block'), setTimeout(function () {
            _0xb767x3.addClass('is-visible')
        }, 10)), $('#colorify-proBy-LimonSeo-cookie-ify-accept').off('click').on('click', function (_0xb767x4) {
            _0xb767x4.preventDefault(), _0xb767x4.stopPropagation(), $.cookie('colorify_preview_cookie_ify_consent', '1', {
                expires: days,
                path: '/'
            }), _0xb767x3.removeClass('is-visible'), setTimeout(function () {
                _0xb767x3.css('display', 'none')
            }, 500)
        }), cookieChoices = {})
    }), $('#back-top').each(function () {
        var _0xb767x3 = $(this);
        $(window).on('scroll', function () {
            $(this).scrollTop() >= 100 ? _0xb767x3.fadeIn(170) : _0xb767x3.fadeOut(170), _0xb767x3.offset().top >= $('#footer-wrapper').offset().top - 34 ? _0xb767x3.addClass('on-footer') : _0xb767x3.removeClass('on-footer')
        }), _0xb767x3.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    })
})
