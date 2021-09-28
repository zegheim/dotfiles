# This file is always sourced, so it should set environment variables which
# need to be updated frequently. PATH (or its associated counterpart path) 
# is a good example because you probably don't want to restart your whole 
# session to make it update. By setting it in that file, reopening a terminal 
# emulator will start a new Zsh instance with the PATH value updated.

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH"
fi

export GOOGLEDRIVE="$HOME/Insync/justinarista@gmail.com/Google Drive"
export PATH="$HOME/.cargo/bin:$PATH"
export PATH="$(yarn global bin):$PATH"

source "$HOME/.cargo/env"
