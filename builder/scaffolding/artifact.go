package scaffolding

// dummy Artifact implementation - does nothing
type Artifact struct {
}

func (*Artifact) BuilderId() string {
	return BuilderId
}

func (a *Artifact) Files() []string {
	return []string{}
}

func (*Artifact) Id() string {
	return ""
}

func (a *Artifact) String() string {
	return ""
}

func (a *Artifact) State(name string) interface{} {
	return nil
}

func (a *Artifact) Destroy() error {
	return nil
}
