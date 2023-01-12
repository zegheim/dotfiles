# This file is always sourced, so it should set environment variables which
# need to be updated frequently. PATH (or its associated counterpart path) 
# is a good example because you probably don't want to restart your whole 
# session to make it update. By setting it in that file, reopening a terminal 
# emulator will start a new Zsh instance with the PATH value updated.

# Alias definitions.
if [ -f ~/.aliases ]; then
    . ~/.aliases
fi

# Bookmarks. See https://threkk.medium.com/how-to-use-bookmarks-in-bash-zsh-6b8074e40774
if [ -d "$HOME/.bookmarks" ]; then
    export CDPATH=".:$HOME/.bookmarks:/"
    alias goto="cd -P"
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH"
fi

export PATH="$HOME/.cargo/bin:$PATH"

source "$HOME/.cargo/env"
